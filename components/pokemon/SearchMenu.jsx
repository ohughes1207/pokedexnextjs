import React from "react";
import { usePokedex } from "./PokedexContext";

export default function SearchMenu () {
  const {setT1Filter, setT2Filter} = usePokedex()

  return (
  <form className='h-96 border border-black mx-auto w-3/4 mt-32 flex p-5'>
    <div className="border border-black m-5">
      <SearchBar />
      <div className="border border-black w-2/3 flex ml-4 mt-16">
        <TypeFilter TFilter={setT1Filter}/>
        <TypeFilter TFilter={setT2Filter}/>
      </div>
    </div>
    <div className="border border-black w-1/2 m-5">
      <GroupFilter />
    </div>
  </form>
  )
}

const SearchBar = () => {
  const { setSearchQuery } = usePokedex();
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };  
  return (
    <input className='border rounded border-black w-2/3 text-5xl m-4' onChange={handleInputChange} type="text" placeholder="Search Pokemon"/>
  );
}

const TypeFilter = ( {TFilter }) => {
  const handleInputChange = (e) => {
    console.log(e.target.value)
    TFilter(e.target.value);
  };
  return (
    <select className="border border-black text-4xl m-4" onChange={handleInputChange}>
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
}


const GroupFilter = () => (
  <div>
    <input type="checkbox" id="legendary-filter" name="legendary" value="legendary"/>
  </div>
)