import React, { useEffect, useState } from "react";
import FilterPokemon from "./helpers/FilterPokemon";
import { usePokedex } from "./PokedexContext";
import GetTypeStyle from "./helpers/GetTypeStyle";

export default function PokemonList ({pokemonData}) {

  const { searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega } = usePokedex();
  
  const [filteredPokemonData, setFilteredPokemonData] = useState(pokemonData);

  console.log("filteredPokemonData type:", filteredPokemonData);

  useEffect(() => {
    FilterPokemon(searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega)
      .then(filteredData => {
        setFilteredPokemonData(filteredData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }, [searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega]);

  return (
    <>
      <div className="mx-auto w-3/4 p-4 my-8 rounded-3xl bg-red-500">
        {filteredPokemonData.map((pokemon) => (
          <div className={`my-4 flex rounded-full p-4 ${GetTypeStyle(pokemon.variants[0].type_1)}Card shadow-md`} key={pokemon.base_id}>
            <img className='h-72 bg-black rounded-full m-4 shadow-lg' src={`/pokemon_imgs/${pokemon.variants[0].img_name}`} alt={pokemon.variants[0].img_name}/>
            <div className="flex rounded-3xl shadow-xl ml-10">
              <CommonAttributes pokemon={pokemon}/>
              <UniqueAttributes pokemon={pokemon}/>
            </div>
          </div>
          ))}
      </div>
    </>
    );
    }

const CommonAttributes = ( {pokemon} ) => (
  <div className="h-72 my-auto mx-4 w-96">
    <h1 className='text-5xl font-semibold p-2'>{pokemon.pokedex_num}</h1>
    <h1 className='text-5xl font-semibold p-2'>{pokemon.base_name}</h1>
    <div className="text-5xl font-semibold p-2 flex">
      <h2 className=''>{pokemon.variants[0].type_1}</h2>
      <h2 className='ml-2'>{pokemon.variants[0].type_2}</h2>
    </div>
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