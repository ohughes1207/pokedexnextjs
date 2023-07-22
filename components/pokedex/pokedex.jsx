/*

import React from "react";
import { useState } from "react";
import SearchPokemon from "./hooks/SearchPokemon";

export default function Pokedex( {data} ) {
    const [searchQuery, setSearchQuery] = useState('')

    return (
      <>
        <SearchMenu setSearchQuery={setSearchQuery}/>
        <PokemonList pokemonData={data} searchQuery={searchQuery}/>
      </>
    );
  }
  
const PokemonList = ({ pokemonData, searchQuery }) => {
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



const SearchMenu = ( {setSearchQuery} ) => {
  return (
  <form className='h-96 border border-black mx-auto w-3/4 mt-32 flex p-5'>
    <div className="border border-black m-5">
      <SearchBar setSearchQuery={setSearchQuery}/>
      <div className="border border-black w-2/3 flex ml-4 mt-16">
        <TypeFilter />
        <TypeFilter />
      </div>
    </div>
    <div className="border border-black w-1/2 m-5">
      <GroupFilter />
    </div>
  </form>
  )
}

const SearchBar = ( {setSearchQuery} ) => {

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };  
  return (
    <input className='border rounded border-black w-2/3 text-5xl m-4' onChange={handleInputChange} type="text" placeholder="Search Pokemon"/>
  );
}

const TypeFilter = () => (
  <select className="border border-black text-4xl m-4">
    <option value=""></option>
    <option value="normal">Normal</option>
    <option value="fire">Fire</option>
    <option value="water">Water</option>
    <option value="grass">Grass</option>
    <option value="electric">Electric</option>
    <option value="ice">Ice</option>
    <option value="fighting">Fighting</option>
    <option value="poison">Poison</option>
    <option value="ground">Ground</option>
    <option value="flying">Flying</option>
    <option value="psychic">Psychic</option>
    <option value="bug">Bug</option>
    <option value="rock">Rock</option>
    <option value="ghost">Ghost</option>
    <option value="dragon">Dragon</option>
    <option value="dark">Dark</option>
    <option value="steel">Steel</option>
    <option value="fairy">Fairy</option>
  </select>
);

const GroupFilter = () => (
  <div>
    <input type="checkbox" id="legendary-filter" name="legendary" value="legendary"/>
  </div>
)

*/