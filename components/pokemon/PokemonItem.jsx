import React from 'react';
import SearchPokemon from './hooks/SearchPokemon';

export default function PokemonItem({ pokemonData }) {

  return (
    <>
      {pokemonData.filter(SearchPokemon(pokemonData, searchQuery)).map((pokemon) => (
        <card className='border rounded w-3/4 my-3' key={pokemon.base_id}>
          <h1 className='text-2xl font-semibold'>{pokemon.pokedex_num} {pokemon.base_name}</h1>
          <h2 className='text-2xl font-semibold'>{pokemon.variants[0].type_1} {pokemon.variants[0].type_2}</h2>
          <img
            className='h-20 w-20'
            key={pokemon.variants[0].var_id}
            src={`/pokemon_imgs/${pokemon.variants[0].img_name}`}
            alt={pokemon.variants[0].img_name}
          />
        </card>
      ))}
    </>
  );
}