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
      <div className="mx-auto w-11/12 p-2 my-8 rounded-3xl bg-red-500">
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
      <div className={`mt-3 flex rounded-full bg-${GetTypeStyle(pokemon.variants[0].type_1)} shadow-xl relative z-10 p-2`}>
        <img className="w-24 sm:w-32 bg-black rounded-full shadow-lg" src={`/pokemon_imgs/${pokemon.variants[0].img_name}`} alt={pokemon.variants[0].img_name}/>
        <div className="flex-grow ml-2 p-2 shadow-xl rounded-3xl sm:flex justify-between">
          <CommonAttributes pokemon={pokemon}/>
          <UniqueAttributes pokemon={pokemon}/>
        </div>
        <button
          className={`w-20 h-20 my-auto ml-2 mr-2 rounded-full shadow-md flex justify-center items-center transition-all duration-500 ${variantsVisible ? `text-${GetTypeStyle(pokemon.variants[0].type_1)} bg-gray-100 ` : `bg-${GetTypeStyle(pokemon.variants[0].type_1)} text-gray-100 hover:bg-gray-100 hover:text-${GetTypeStyle(pokemon.variants[0].type_1)}`}`}
          onClick={() => setVariantsVisible(!variantsVisible)}
        >
          <PiPlusBold size={80} className={`transition-transform duration-500 ${variantsVisible ? 'rotate-[225deg]' : undefined} `}/>
        </button>
      </div>
      <div className={`relative bottom-3 grid transition-all duration-700 ${variantsVisible ? 'grid-rows-[minmax(0,1fr)]' : ' grid-rows-[minmax(0,0fr)]'}`}>
        <div className="overflow-hidden">
          <div className={`px-1 py-2 w-5/6 mx-auto rounded-b-3xl transition-all duration-700 bg-${GetTypeStyle(pokemon.variants[0].type_1)} ${variantsVisible ? 'translate-y-0' : ' -translate-y-full'} }`}>
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
  <div className={`p-1 mx-auto mt-4 flex items-center rounded-full shadow-lg bg-${GetTypeStyle(variant.type_1)}`}>
    <img className=' w-1/4 bg-black rounded-full shadow-lg' src={`/pokemon_imgs/${variant.img_name}`} alt={variant.img_name}/>
    <div className="h-fit rounded-3xl flex p-1 shadow-lg flex-grow justify-between border">
      <VariantDetails variant={variant} />
      <VariantStats variant={variant} />
    </div>
  </div>
)


const VariantDetails = ( {variant} ) => (
  <div className="h-full ml-2 mr-1 w-fit">
    <h1 className="text-xs sm:text-base">{variant.var_name}</h1>
    <h2 className="text-xs py-2">{variant.type_1} {variant.type_2}</h2>
  </div>
)


const VariantStats = ( {variant} ) => (
  <div className="text-xs">
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
  <div className="">
    <h1 className='text-sm sm:text-lg font-semibold'>{pokemon.pokedex_num}</h1>
    <h1 className='text-sm sm:text-lg font-semibold'>{pokemon.base_name}</h1>
  </div>
);


const UniqueAttributes = ( {pokemon} ) => (
  <div className="mt-auto">
    {pokemon.pseudo_legendary && (
      <h1 className='text-sm font-semibold'>Pseudo-legendary</h1>
    )}
    {pokemon.legendary && (
      <h1 className='text-sm font-semibold'>Legendary</h1>
    )}
    {pokemon.mythical && (
      <h1 className='text-sm font-semibold'>Mythical</h1>
    )}
    {pokemon.paradox && (
      <h1 className='text-sm font-semibold'>Paradox</h1>
    )}
    {pokemon.ultrabeast && (
      <h1 className='text-sm font-semibold'>Ultra Beast</h1>
    )}
    {pokemon.variants.some((variant) => variant.mega) && (
      <h1 className='text-sm font-semibold'>Mega</h1>
    )}
    {pokemon.variants.some((variant) => variant.regional) && (
      <h1 className='text-sm font-semibold'>Regional</h1>
    )}  
  </div>
);