import React, { useEffect, useState } from "react";
import GetTypeStyle from "./helpers/GetTypeStyle";
import { PiPlusBold } from "react-icons/pi"
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi"
import FetchFilteredPokemon from "./helpers/FetchFilteredPokemon";
import { useAtomValue, useAtom } from "jotai";
import { T1FilterAtom, T2FilterAtom, genValueAtom, isLegendaryAtom, isMegaAtom, isMythicalAtom, isParadoxAtom, isPseudoLAtom, isRegionalAtom, isUBAtom, pageNumAtom, searchQueryAtom } from "./PokedexAtoms";

export default function PokemonList ( { pokemonData, total_pages } ) {

  const searchQuery = useAtomValue(searchQueryAtom)
  const T1Filter = useAtomValue(T1FilterAtom)
  const T2Filter = useAtomValue(T2FilterAtom)
  const genValue = useAtomValue(genValueAtom)
  const isLegendary = useAtomValue(isLegendaryAtom)
  const isParadox = useAtomValue(isParadoxAtom)
  const isPseudoL = useAtomValue(isPseudoLAtom)
  const isUB = useAtomValue(isUBAtom)
  const isMythical = useAtomValue(isMythicalAtom)
  const isRegional = useAtomValue(isRegionalAtom)
  const isMega = useAtomValue(isMegaAtom)

  const [pageNum, setPage] = useAtom(pageNumAtom)

  
  const [filteredPokemonData, setFilteredPokemonData] = useState(pokemonData);

  const [maxPages, setMaxPages] = useState(total_pages)

  //console.log("filteredPokemonData type:", filteredPokemonData);

  useEffect(() => {
    FetchFilteredPokemon(searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega, pageNum)
      .then(filteredData => {
        setFilteredPokemonData(filteredData.data);
        setMaxPages(filteredData.totalPages);
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
          <PokemonCard pokemon={pokemon} key={pokemon.baseId}/>
          ))}
        <div className="mx-auto my-12 flex justify-center text-gray-100 px-1">
          <PageMenu maxPages={maxPages}/>
        </div>
      </div>
    </>
    );
  }

const PageMenu = ( {maxPages} ) => {

  const [pageNum, setPage] = useAtom(pageNumAtom);

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
      <div className="mx-12 sm:mx-16 md:mx-20 lg:mx-24 my-auto text-center text-2xl">
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
      <div className={`mt-3 2xl:mt-6 flex rounded-full bg-${GetTypeStyle(pokemon.variants[0].pokemonType1)} shadow-xl relative z-10 p-2 sm:p-3 md:p-3.5 lg:p-5 xl:p-7 2xl:p-8 h-28 sm:h-auto`}>
        <img className="h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 2xl:h-72 mr-2 sm:mr-3 md:mr-3.5 xl:mr-7 lg:mr-5 2xl:mr-14 my-auto bg-black rounded-full shadow-lg" src={`/pokemon_imgs/${pokemon.variants[0].imageName}`} alt={pokemon.variants[0].imageName}/>
        <div className="flex-grow shadow-xl rounded-3xl flex flex-col xl:flex-row justify-between p-2 sm:px-3 lg:px-4 lg:py-3 xl:px-6 xl:py-4 2xl:px-7">
          <CommonAttributes pokemon={pokemon}/>
          <UniqueAttributes pokemon={pokemon}/>
        </div>
        <button
          className={`w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 xl:w-48 xl:h-48 my-auto ml-2 sm:ml-3 md:ml-3.5 lg:ml-5 xl:ml-7 2xl:ml-11 2xl:mr-3 rounded-full shadow-md flex justify-center items-center transition-all duration-500 ${variantsVisible ? `text-${GetTypeStyle(pokemon.variants[0].pokemonType1	)} bg-gray-100 ` : `bg-${GetTypeStyle(pokemon.variants[0].pokemonType1)} text-gray-100 hover:bg-gray-100 hover:text-${GetTypeStyle(pokemon.variants[0].pokemonType1)}`}`}
          onClick={() => setVariantsVisible(!variantsVisible)}
        >
          <PiPlusBold className={`text-[80px] sm:text-[110px] md:text-[140px] xl:text-[190px] transition-transform duration-500 ${variantsVisible ? 'rotate-[225deg]' : undefined} `}/>
        </button>
      </div>
      <div className={`relative bottom-3 grid transition-all duration-700 ${variantsVisible ? 'grid-rows-[minmax(0,1fr)]' : ' grid-rows-[minmax(0,0fr)]'}`}>
        <div className="overflow-hidden">
          <div className={`px-1 lg:px-2 xl:px-4 2xl:px-6 py-2 lg:py-5 w-5/6 md:w-3/4 2xl:w-4/5 2xl:pb-2 mx-auto rounded-b-3xl transition-all duration-700 bg-${GetTypeStyle(pokemon.variants[0].pokemonType1)} ${variantsVisible ? 'translate-y-0' : ' -translate-y-full'} }`}>
            {pokemon.variants.map((variant) =>
              <VariantCard variant={variant} key={variant.varId}/>
            )}
          </div>
        </div>
      </div>
    </>
  )
}


const VariantCard = ( {variant} ) => (
  <div className={`p-1 md:py-1.5 md:pl-1.5 lg:py-2 lg:pl-2 xl:py-4 xl:pl-4 md:h-1/3 mx-auto mt-4 flex items-center rounded-full shadow-lg bg-${GetTypeStyle(variant.pokemonType1)} pr-8 sm:pr-11 lg:pr-14 xl:pr-24 2xl:mb-8`}>
    <img className='w-1/4 lg:w-[30%] xl:w-1/4 2xl:w-1/4 bg-black rounded-full shadow-lg mr-0.5 md:mr-1.5 lg:mr-2 xl:mr-4' src={`/pokemon_imgs/${variant.imageName}`} alt={variant.imageName}/>
    <div className="h-fit rounded-3xl flex px-2 sm:py-1 xl:pl-2 shadow-lg flex-grow justify-between">
      <VariantDetails variant={variant} />
      <VariantStats variant={variant} />
    </div>
  </div>
)


const VariantDetails = ( {variant} ) => (
  <div className="mt-1.5 sm:mt-0.5 px-1 text-xs sm:text-base md:text-lg lg:text-xl xl:text-3xl 2xl:text-4xl">
    <h1 className="mb-2">{variant.variantName}</h1>
    <h2 className="">{variant.pokemonType1} {variant.pokemonType2}</h2>
  </div>
)


const VariantStats = ( {variant} ) => (
  <div className="sm:mr-2 md:mr-3 xl:mr-8 text-xs lg:text-sm xl:text-base xl:w-auto 2xl:text-xl">
    <h1>Total: {variant.totalStats}</h1>
    <h2>HP: {variant.hp}</h2>
    <h2>Attack: {variant.attack}</h2>
    <h2>Defense: {variant.defense}</h2>
    <h2>Sp. Atk: {variant.specialAttack}</h2>
    <h2>Sp. Def: {variant.specialDefense}</h2>
    <h2>Speed: {variant.speed}</h2>
  </div>
)


const CommonAttributes = ( {pokemon} ) => (
  <div className="text-sm sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold w-fit">
    <h1 className="2xl:mb-3">#{String(pokemon.pokedexNum).padStart(4, '0')}</h1>
    <h1 className=''>{pokemon.baseName}</h1>
  </div>
);


const UniqueAttributes = ( {pokemon} ) => (
  <div className="text-sm font-semibold sm:text-lg md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
    {pokemon.pseudo_legendary && (
      <h1 className='2xl:mb-3'>Pseudo-legendary</h1>
    )}
    {pokemon.legendary && (
      <h1 className='2xl:mb-3'>Legendary</h1>
    )}
    {pokemon.mythical && (
      <h1 className='2xl:mb-3'>Mythical</h1>
    )}
    {pokemon.paradox && (
      <h1 className='2xl:mb-3'>Paradox</h1>
    )}
    {pokemon.ultrabeast && (
      <h1 className='2xl:mb-3'>Ultra Beast</h1>
    )}
    {pokemon.variants.some((variant) => variant.isMega) && (
      <h1 className='2xl:mb-3'>Mega</h1>
    )}
    {pokemon.variants.some((variant) => variant.isRegional) && (
      <h1 className='2xl:mb-3'>Regional</h1>
    )}  
  </div>
);