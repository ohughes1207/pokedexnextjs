import React, { useContext } from "react";
import { usePokedex } from "./PokedexContext";
import { AiOutlineCheck } from "react-icons/ai"

export default function SearchMenu () {
  const {setT1Filter, setT2Filter, setIsLegendary, isLegendary, isMythical, setIsMythical, isPseudoL, setIsPseudoL, isParadox, setIsParadox, isRegional, setIsRegional, isMega, setIsMega, isUB, setIsUB} = usePokedex()

  return (
  <div className='h-96 border border-black mx-auto w-3/4 mt-32 flex p-5'>
    <div className="border border-black m-5">
      <SearchBar />
      <div className="border border-black w-2/3 flex ml-4 mt-16">
        <TypeFilter TFilter={setT1Filter}/>
        <TypeFilter TFilter={setT2Filter}/>
      </div>
    </div>
    <div className="border border-black w-1/2 m-5">
      <div className="border border-black h-1/2 flex">
        <Filter text={'Legendary'} filter={isLegendary} setFilter={setIsLegendary}/>
        <Filter text={'Mythical'} filter={isMythical} setFilter={setIsMythical}/>
        <Filter text={'Ultra Beast'} filter={isUB} setFilter={setIsUB}/>
        <Filter text={'Paradox'} filter={isParadox} setFilter={setIsParadox}/>

      </div>
      <div className="border border-black h-1/2 flex">
        <Filter text={'Regional'} filter={isRegional} setFilter={setIsRegional}/>
        <Filter text={'Mega'} filter={isMega} setFilter={setIsMega}/>
        <Filter text={'Pseudo-legendary'} filter={isPseudoL} setFilter={setIsPseudoL}/>
      </div>
    </div>
  </div>
  )
}

const Filter = ( {text, filter, setFilter } ) => {
  
  const toggleFilter = (e) => {
    console.log(filter)
    setFilter(!filter)
  }; 

  return (
    <div className="border border-black mx-auto">
      <span className="text-2xl border border-black mx-3">{text}</span>
      <button className={`flex items-center justify-center h-24 w-24 m-2 mx-auto text-gray-100 hover:text-red-500 hover:bg-gray-100 rounded hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg ${filter ? 'text-red-500 rounded-2xl bg-gray-100' : 'bg-red-500'}`} onClick={toggleFilter}>
        {<AiOutlineCheck size="85"/>}
      </button>
    </div>
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