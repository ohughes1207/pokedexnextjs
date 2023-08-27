import React from "react";
import { usePokedex } from "./PokedexContext";
import { AiOutlineCheck } from "react-icons/ai"

export default function SearchMenu () {
  const {setT1Filter, setT2Filter, setIsLegendary, isLegendary, isMythical, setIsMythical, isPseudoL, setIsPseudoL, isParadox, setIsParadox, isRegional, setIsRegional, isMega, setIsMega, isUB, setIsUB} = usePokedex()

  return (
    <div className="bg-red-500 mt-32 w-min p-2 mx-auto xl:w-3/4">
      <div className="flex flex-col xl:flex-row">
        <div className="rounded-3xl m-4 border border-black mx-auto">
          <div className="m-2">
            <SearchBar />
          </div>
          <div className="w-full mx-auto flex justify-around px-5">
            <TypeFilter />
            <TypeFilter />
          </div>
          <div className="flex mx-auto m-2">
            <GenFilter />
          </div>
        </div>
        <div className="mx-auto rounded-3xl m-4 text-gray-100 flex-col border border-black p-2">
          <div className="flex justify-evenly">
            <Filter text={'Legendary'} filter={isLegendary} setFilter={setIsLegendary}/>
            <Filter text={'Mythical'} filter={isMythical} setFilter={setIsMythical}/>
            <Filter text={'Ultra Beast'} filter={isUB} setFilter={setIsUB}/>
            <Filter text={'Paradox'} filter={isParadox} setFilter={setIsParadox}/>
          </div>
          <div className="flex justify-evenly">
            <Filter text={'Regional'} filter={isRegional} setFilter={setIsRegional}/>
            <Filter text={'Mega'} filter={isMega} setFilter={setIsMega}/>
            <Filter text={'Pseudo-legendary'} filter={isPseudoL} setFilter={setIsPseudoL}/>
          </div>
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
    <div className="flex flex-col items-center justify-center m-2">
      <span className="text-sm mx-auto text-center truncate">{text}</span>
      <button className={` flex items-center justify-center w-16 h-16 mx-auto text-gray-100 hover:text-red-500 hover:bg-gray-100 rounded hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg ${filter ? 'text-red-500 rounded-3xl bg-gray-100' : 'bg-red-500'}`} onClick={toggleFilter}>
        <AiOutlineCheck size="85"/>
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
    <input className='text-center rounded-3xl xl:text-5xl text-lg' onChange={handleInputChange} type="text" placeholder="Search Pokemon"/>
  );
}


const GenFilter = () => {
  const { setGenValue } =usePokedex()
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setGenValue(e.target.value);
  };
  return (
    <select className="mx-auto rounded-3xl text-center px-5 text-lg xl:text-4xl" onChange={handleInputChange}>
      <option value="0"></option>
      <option value="1">Generation 1</option>
      <option value="2">Generation 2</option>
      <option value="3">Generation 3</option>
      <option value="4">Generation 4</option>
      <option value="5">Generation 5</option>
      <option value="6">Generation 6</option>
      <option value="7">Generation 7</option>
      <option value="8">Generation 8</option>
      <option value="9">Generation 9</option>
    </select>
  );
}

const TypeFilter = ( {TFilter }) => {
  
  const handleInputChange = (e) => {
    TFilter(e.target.value);
  };
  return (
    <select className="rounded-3xl text-center text-lg xl:text-4xl" onChange={handleInputChange}>
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