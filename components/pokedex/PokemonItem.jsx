import React, { useEffect, useState } from "react";
import FilterPokemon from "./helpers/FetchFilteredPokemon";
import { usePokedex } from "./PokedexContext";
import GetTypeStyle from "./helpers/GetTypeStyle";
import { PiPlusBold } from "react-icons/pi"
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi"
import FetchFilteredPokemon from "./helpers/FetchFilteredPokemon";


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
    setPage(1);}, [maxPages]);


  
  if (filteredPokemonData.length == 0) {
    return (
      <div className="mx-auto w-3/4 p-4 my-8 rounded-3xl bg-red-500">
        <p className=" text-center text-6xl text-gray-100 py-5">No Pokemon found!</p>
      </div>
    )
  } 

  return (
    <>
      <div className="mx-auto w-3/4 p-4 my-8 rounded-3xl bg-red-500">
        {filteredPokemonData.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.base_id}/>
          ))}
        <div className="mx-auto border border-black my-12 flex justify-center text-gray-100">
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
      <div className="border border-black">
        <button onClick={DecrementPage}>
          <BiSolidLeftArrow size={90}/>
        </button>
      </div>
      <div className="mx-20 my-auto border border-black text-center w-14">
        {pageNum} / {maxPages}
      </div>
      <div className="border border-black rounded">
        <button onClick={IncrementPage}>
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
      <div className={`mt-6 flex rounded-full p-4 bg-${GetTypeStyle(pokemon.variants[0].type_1)} shadow-xl relative z-10`}>
        <img className='h-72 bg-black rounded-full m-4 shadow-lg' src={`/pokemon_imgs/${pokemon.variants[0].img_name}`} alt={pokemon.variants[0].img_name}/>
        <div className="flex rounded-3xl shadow-xl ml-10">
          <CommonAttributes pokemon={pokemon}/>
          <UniqueAttributes pokemon={pokemon}/>
        </div>
        <button
          className={`w-48 h-48 my-auto mx-auto rounded-full shadow-md flex justify-center items-center transition-all duration-500 ${variantsVisible ? `text-${GetTypeStyle(pokemon.variants[0].type_1)} bg-gray-100` : `bg-${GetTypeStyle(pokemon.variants[0].type_1)} text-gray-100 hover:bg-gray-100 hover:text-${GetTypeStyle(pokemon.variants[0].type_1)}`}`}
          onClick={() => setVariantsVisible(!variantsVisible)}
          >
          <PiPlusBold size={190}/>
        </button>
      </div>
      <div className={`overflow-hidden relative bottom-3 grid transition-all duration-500 ${variantsVisible ? 'grid-rows-[minmax(0,1fr)]' : ' grid-rows-[minmax(0,0fr)]'}`}>
        <div className="">
          <div className={`mb-6 px-6 py-4 w-4/5 mx-auto rounded-b-3xl bg-${GetTypeStyle(pokemon.variants[0].type_1)} ${variantsVisible ? '' : ''} }`}>
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
  <div className={`border border-black h-1/3 mx-auto my-6 flex items-center rounded-full shadow-md bg-${GetTypeStyle(variant.type_1)}`} key={variant.var_id}>
    <img className='h-56 m-4 bg-black rounded-full shadow-lg' src={`/pokemon_imgs/${variant.img_name}`} alt={variant.img_name}/>
    <div className="border border-black h-56 w-2/3 rounded-3xl flex p-2 shadow-lg">
      <VariantDetails variant={variant} />
      <VariantStats variant={variant} />
    </div>
  </div>
)


const VariantDetails = ( {variant} ) => (
  <div className="border border-black w-2/3 h-full ml-2">
    <h1 className="text-4xl">{variant.var_name}</h1>
    <h2 className="text-4xl py-2">{variant.type_1} {variant.type_2}</h2>
  </div>
)


const VariantStats = ( {variant} ) => (
  <div className="border border-black w-1/4 h-full text-xl">
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
  <div className="h-72 my-auto mx-4 w-96">
    <h1 className='text-5xl font-semibold p-2'>{pokemon.pokedex_num}</h1>
    <h1 className='text-5xl font-semibold p-2'>{pokemon.base_name}</h1>
  </div>
);


const UniqueAttributes = ( {pokemon} ) => (
  <div className="w-72 h-72 my-auto mx-4">
    {pokemon.pseudo_legendary && (
      <h1 className='text-5xl font-semibold p-2 text-center'>Pseudo-legendary</h1>
    )}
    {pokemon.legendary && (
      <h1 className='text-5xl font-semibold p-2 text-center'>Legendary</h1>
    )}
    {pokemon.mythical && (
      <h1 className='text-5xl font-semibold p-2 text-center'>Mythical</h1>
    )}
    {pokemon.paradox && (
      <h1 className='text-5xl font-semibold p-2 text-center'>Paradox</h1>
    )}
    {pokemon.ultrabeast && (
      <h1 className='text-5xl font-semibold p-2 text-center'>Ultra Beast</h1>
    )}
    {pokemon.variants.some((variant) => variant.mega) && (
      <h1 className='text-5xl font-semibold p-2 text-center'>Mega</h1>
    )}
    {pokemon.variants.some((variant) => variant.regional) && (
      <h1 className='text-5xl font-semibold p-2 text-center'>Regional</h1>
    )}  
  </div>
);