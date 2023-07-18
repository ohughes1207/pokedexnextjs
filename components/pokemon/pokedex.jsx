import React from "react";
import { useState } from "react";
import SearchPokemon from "./hooks/SearchPokemon";

export default function Pokedex( {data} ) {
    const [searchQuery, setSearchQuery] = useState('')

    return (
      <>
        <SearchBar setSearchQuery={setSearchQuery}/>
        <PokemonCard pokemonData={data} searchQuery={searchQuery}/>
      </>
    );
  }
  

const PokemonCard = ({ pokemonData, searchQuery }) => {

        const filteredPokemonData = pokemonData.filter((pokemon) =>
          SearchPokemon(pokemon, searchQuery)
        );
    return (
      <>
        <div className="mx-auto p-40 border border-black">
        {filteredPokemonData.map((pokemon) => (
                    <card className='border rounded w-3/4 my-3 border-black' key={pokemon.base_id}>
                    <h1 className='text-2xl font-semibold border border-black'>{pokemon.pokedex_num} {pokemon.base_name}</h1>
                    <h2 className='text-2xl font-semibold border border-black'>{pokemon.variants[0].type_1} {pokemon.variants[0].type_2}</h2>
                    <img
                    className='h-20 w-20 border border-black'
                    key={pokemon.variants[0].var_id}
                    src={`/pokemon_imgs/${pokemon.variants[0].img_name}`}
                    alt={pokemon.variants[0].img_name}
                    />
                </card>
            ))}
        </div>
      </>
    );
  }
  
const SearchBar = ( {setSearchQuery} ) => {
  
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };  
    return (
        <div className="p-40 mx-auto">
            <form className=''>
                <input
                className='mb-10 border rounded border-black'
                onChange={handleInputChange}
                type="text"
                />
            </form>
        </div>
    );
    }