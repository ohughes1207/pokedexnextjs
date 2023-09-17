import React, { useEffect, useState } from "react";
import { usePokedex } from "./PokedexContext";
import GetTypeStyle from "./helpers/GetTypeStyle";
import { PiPlusBold } from "react-icons/pi"
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi"
import FetchFilteredPokemon from "./helpers/FetchFilteredPokemon";
import Image from "next/image";

export default function PokemonList ( { pokemonData, total_pages } ) {

  const { searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega, pageNum, setPage } = usePokedex();

  
  const [filteredPokemonData, setFilteredPokemonData] = useState(pokemonData);

  const [maxPages, setMaxPages] = useState(total_pages)

  //console.log("filteredPokemonData type:", filteredPokemonData);

  useEffect(() => {
    FetchFilteredPokemon(searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega, pageNum)
      .then(filteredData => {
        setFilteredPokemonData(filteredData.data);
        setMaxPages(filteredData.total_pages);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, [searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega, pageNum]);
  
  useEffect(() => {
    setPage(1);}, [maxPages, setPage]);


  
  if (filteredPokemonData.length === 0) {
    return (
      <div className="mx-auto w-11/12 p-4 my-8 rounded-3xl bg-red-500">
        <p className=" text-center text-6xl text-gray-100 py-5">No Pokemon found!</p>
      </div>
    )
  } 

  return (
    <>
      <div className="mx-auto w-11/12 p-1 sm:p-2 my-8 rounded-3xl bg-red-500 sm:w-4/5 lg:w-3/4 xl:w-11/12 2xl:w-3/4 xl:px-6 2xl:p-4">
        {filteredPokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.base_id}/>
          ))}
        <div className="mx-auto my-12 flex justify-center text-gray-100">
          <PageMenu maxPages={maxPages}/>
        </div>
      </div>
    </>
    );
  }

const PageMenu = ( {maxPages} ) => {

  const {pageNum, setPage} = usePokedex();

  const IncrementPage = () => {
    if (pageNum < maxPages) {
      setPage(pageNum+1);
    }
  };

  const DecrementPage = () => {
    if (pageNum > 1) {
      setPage(pageNum-1);
    }
  };
  return (
    <>
      <div className="">
        <button onClick={DecrementPage} className=" shadow-lg transition-all duration-500 hover:bg-gray-100 hover:text-red-500 rounded-md hover:rounded-3xl">
          <BiSolidLeftArrow size={90}/>
        </button>
      </div>
      <div className="mx-20 my-auto text-center w-20 text-2xl">
        {pageNum} / {maxPages}
      </div>
      <div className="">
        <button onClick={IncrementPage} className="shadow-lg transition-all duration-500 hover:bg-gray-100 hover:text-red-500 rounded-md hover:rounded-3xl">
          <BiSolidRightArrow size={90}/>
        </button>
      </div>
    </>
  )
}



const PokemonCard = ( {pokemon} ) => {

  const [variantsVisible, setVariantsVisible] = useState(false)

  return (
    <>
      <div className={`mt-3 2xl:mt-6 flex rounded-full bg-${GetTypeStyle(pokemon.variants[0].type_1)} shadow-xl relative z-10 p-2 sm:p-3 md:p-3.5 lg:p-5 xl:p-7 2xl:p-8 h-28 sm:h-auto`}>
        <img className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 2xl:h-72 mr-2 sm:mr-3 md:mr-3.5 xl:mr-7 lg:mr-5 2xl:mr-14 my-auto bg-black rounded-full shadow-lg" src={`/pokemon_imgs/${pokemon.variants[0].img_name}`} alt={pokemon.variants[0].img_name}/>
        <div className="flex-grow shadow-xl rounded-3xl flex flex-col justify-between p-2 sm:px-3 lg:px-4 lg:py-3 xl:px-5 xl:py-4 2xl:px-3">
          <CommonAttributes pokemon={pokemon}/>
          <UniqueAttributes pokemon={pokemon}/>
        </div>
        <button
          className={`w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 xl:w-48 xl:h-48 my-auto ml-2 sm:ml-3 md:ml-3.5 lg:ml-5 xl:ml-7 2xl:ml-11 2xl:mr-3 rounded-full shadow-md flex justify-center items-center transition-all duration-500 ${variantsVisible ? `text-${GetTypeStyle(pokemon.variants[0].type_1)} bg-gray-100 ` : `bg-${GetTypeStyle(pokemon.variants[0].type_1)} text-gray-100 hover:bg-gray-100 hover:text-${GetTypeStyle(pokemon.variants[0].type_1)}`}`}
          onClick={() => setVariantsVisible(!variantsVisible)}
        >
          <PiPlusBold className={`text-[80px] sm:text-[110px] md:text-[140px] xl:text-[190px] transition-transform duration-500 ${variantsVisible ? 'rotate-[225deg]' : undefined} `}/>
        </button>
      </div>
      <div className={`relative bottom-3 grid transition-all duration-700 ${variantsVisible ? 'grid-rows-[minmax(0,1fr)]' : ' grid-rows-[minmax(0,0fr)]'}`}>
        <div className="overflow-hidden">
          <div className={`px-1 lg:px-2 xl:px-4 2xl:px-6 py-2 lg:py-5 w-5/6 md:w-3/4 2xl:w-4/5 mx-auto rounded-b-3xl transition-all duration-700 bg-${GetTypeStyle(pokemon.variants[0].type_1)} ${variantsVisible ? 'translate-y-0' : ' -translate-y-full'} }`}>
            {pokemon.variants.map((variant) =>
              <VariantCard variant={variant} key={variant.var_id}/>
            )}
          </div>
        </div>
      </div>
    </>
  )
}


const VariantCard = ( {variant} ) => (
  <div className={`p-1 md:pl-1 lg:pl-0 md:py-0 md:h-1/3 mx-auto mt-4 flex items-center rounded-full shadow-lg bg-${GetTypeStyle(variant.type_1)} pr-8 sm:pr-11 lg:pr-14 xl:pr-24 border`}>
    <img className='w-1/4 lg:w-[30%] xl:w-1/4 md:m-1 lg:m-2 xl:m-3 2xl:m-4 2xl:w-[21%] 2xl:w-1/5 2xl:w-56 bg-black rounded-full shadow-lg mr-0.5 sm:mr-1 xl:mr-2' src={`/pokemon_imgs/${variant.img_name}`} alt={variant.img_name}/>
    <div className="h-fit rounded-3xl flex p-0.5 md:pl-1 xl:pl-2 shadow-lg flex-grow justify-between pr-2 border md:m-1">
      <VariantDetails variant={variant} />
      <VariantStats variant={variant} />
    </div>
  </div>
)


const VariantDetails = ( {variant} ) => (
  <div className="h-full ml-2 mr-1 text-xs sm:text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
    <h1 className="">{variant.var_name}</h1>
    <h2 className="py-2">{variant.type_1} {variant.type_2}</h2>
  </div>
)


const VariantStats = ( {variant} ) => (
  <div className="ml-1 text-xs w-20 lg:text-sm xl:text-base xl:w-auto 2xl:text-xl">
    <h1>Total: {variant.total_stats}</h1>
    <h2>HP: {variant.hp}</h2>
    <h2>Attack: {variant.att}</h2>
    <h2>Defense: {variant.defense}</h2>
    <h2>Sp. Atk: {variant.sp_att}</h2>
    <h2>Sp. Def: {variant.sp_def}</h2>
    <h2>Speed: {variant.speed}</h2>
  </div>
)


const CommonAttributes = ( {pokemon} ) => (
  <div className="text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold w-fit 2xl:mx-4 ">
    <h1 className='2xl:mb-3'>{pokemon.pokedex_num}</h1>
    <h1 className=''>{pokemon.base_name}</h1>
  </div>
);


const UniqueAttributes = ( {pokemon} ) => (
  <div className="mt-auto text-sm font-semibold sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
    {pokemon.pseudo_legendary && (
      <h1 className=''>Pseudo-legendary</h1>
    )}
    {pokemon.legendary && (
      <h1 className=''>Legendary</h1>
    )}
    {pokemon.mythical && (
      <h1 className=''>Mythical</h1>
    )}
    {pokemon.paradox && (
      <h1 className=''>Paradox</h1>
    )}
    {pokemon.ultrabeast && (
      <h1 className=''>Ultra Beast</h1>
    )}
    {pokemon.variants.some((variant) => variant.mega) && (
      <h1 className=''>Mega</h1>
    )}
    {pokemon.variants.some((variant) => variant.regional) && (
      <h1 className=''>Regional</h1>
    )}  
  </div>
);