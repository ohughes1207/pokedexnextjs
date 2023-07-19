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
        <div className="mx-auto border border-black w-3/4 p-4 my-8">
        {filteredPokemonData.map((pokemon) => (
                <div className='border border-black my-4 flex rounded-full p-4' key={pokemon.base_id}>
                  <img className='h-72 bg-black border rounded-full m-4' src={`/pokemon_imgs/${pokemon.variants[0].img_name}`} alt={pokemon.variants[0].img_name}/>
                  <CommonAttributes pokemon={pokemon}/>
                  <UniqueAttributes />
                </div>
            ))}
        </div>
      </>
    );
  }


const CommonAttributes = ( {pokemon} ) => (
  <div className="border border-black h-72">
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
    <h1 className='text-5xl font-semibold p-2'>Legendary</h1>
    <h1 className='text-5xl font-semibold p-2'>Mega</h1>
  </div>
);

  
const SearchBar = ( {setSearchQuery} ) => {
  
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };  
    return (
      <form className='h-96 border border-black mx-auto w-3/4 mt-32'>
          <input className='border rounded border-black w-1/3 text-5xl' onChange={handleInputChange} type="text" placeholder="Search Pokemon"/>
      </form>
    );
    }