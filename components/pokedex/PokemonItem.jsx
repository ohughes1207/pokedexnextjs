import React, { useEffect, useState } from "react";
import FilterPokemon from "./functions/FilterPokemon";
import { usePokedex } from "./PokedexContext";
import GetTypeStyle from "./functions/GetTypeStyle";

export default function PokemonList ({pokemonData}) {

  const { searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega } = usePokedex();
  
  const [filteredPokemonData, setFilteredPokemonData] = useState(pokemonData);

  useEffect(() => {
    const filteredData = FilterPokemon(pokemonData,searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega);
    setFilteredPokemonData(filteredData);
    }, [searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega]);

  return (
    <>
      <div className="mx-auto border border-black w-3/4 p-4 my-8 rounded-3xl bg-red-500">
        {filteredPokemonData.map((pokemon) => (
          <div className={`border border-black my-4 flex rounded-full p-4 ${GetTypeStyle(pokemon.variants[0].type_1)}Card shadow-md`} key={pokemon.base_id}>
            <img className='h-72 bg-black border border-black rounded-full m-4' src={`/pokemon_imgs/${pokemon.variants[0].img_name}`} alt={pokemon.variants[0].img_name}/>
            <CommonAttributes pokemon={pokemon}/>
            <UniqueAttributes pokemon={pokemon}/>
          </div>
          ))}
      </div>
    </>
    );
    }

const CommonAttributes = ( {pokemon} ) => (
  <div className="border border-black h-72 w-max my-auto">
    <h1 className='text-5xl font-semibold p-2'>{pokemon.pokedex_num}</h1>
    <h1 className='text-5xl font-semibold p-2'>{pokemon.base_name}</h1>
    <div className="text-5xl font-semibold p-2 flex">
      <h2 className=''>{pokemon.variants[0].type_1}</h2>
      <h2 className='ml-2'>{pokemon.variants[0].type_2}</h2>
    </div>
  </div>
);

const UniqueAttributes = ( {pokemon} ) => (
  <div className="border border-black w-72 h-72 right-0 m-auto">
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