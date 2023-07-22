import React, { useContext } from "react";
import SearchPokemon from "./hooks/SearchPokemon";
import { usePokedex } from "./PokedexContext";

export default function PokemonList ({pokemonData}) {

  const {searchQuery, T1Filter, T2Filter} = usePokedex()
  const filteredPokemonData = pokemonData.filter((pokemon) =>
    SearchPokemon(pokemon, searchQuery, T1Filter, T2Filter));

  return (
    <>
      <div className="mx-auto border border-black w-3/4 p-4 my-8">
        {filteredPokemonData.map((pokemon) => (
          <div className='border border-black my-4 flex rounded-full p-4' key={pokemon.base_id}>
            <img className='h-72 bg-black border rounded-full m-4' src={`/pokemon_imgs/${pokemon.variants[0].img_name}`} alt={pokemon.variants[0].img_name}/>
            <CommonAttributes pokemon={pokemon}/>
            <UniqueAttributes pokemon={pokemon}/>
          </div>
          ))}
          <div className="border border-black bottom-0">
            PREVIOUS PAGE
            NEXT PAGE
          </div>
      </div>
    </>
    );
    }

const CommonAttributes = ( {pokemon} ) => (
  <div className="border border-black h-72 w-max">
    <h1 className='text-5xl font-semibold p-2'>{pokemon.pokedex_num}</h1>
    <h1 className='text-5xl font-semibold p-2'>{pokemon.base_name}</h1>
    <div className="text-5xl font-semibold p-2 flex">
      <h2 className=''>{pokemon.variants[0].type_1}</h2>
      <h2 className='ml-2'>{pokemon.variants[0].type_2}</h2>
    </div>
  </div>
);

const UniqueAttributes = ( {pokemon} ) => (
  <div className="border border-black w-72 h-72 right-0 mx-auto">
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