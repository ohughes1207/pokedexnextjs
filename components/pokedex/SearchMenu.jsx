import React from "react";
import { usePokedex } from "./PokedexContext";
import { AiOutlineCheck } from "react-icons/ai"

export default function SearchMenu () {
  const {setT1Filter, setT2Filter, setIsLegendary, isLegendary, isMythical, setIsMythical, isPseudoL, setIsPseudoL, isParadox, setIsParadox, isRegional, setIsRegional, isMega, setIsMega, isUB, setIsUB} = usePokedex()

  return (
    <div className="bg-red-500 mt-32 w-min p-1 mx-auto lg:w-3/4 xl:w-11/12 rounded-3xl 2xl:w-3/4 xl:h-96">
      <div className="flex flex-col xl:flex-row">
        <div className="rounded-3xl mx-auto shadow-lg w-11/12 lg:w-5/6 xl:w-fit p-4 sm:p-6 xl:py-8 h-min my-auto 2xl:w-[480px] 2xl:py-4">
          <div className="flex justify-center mt-4">
            <SearchBar />
          </div>
          <div className="flex justify-around px-5 my-2 sm:my-4 xl:my-8 2xl:px-2">
            <TypeFilter TFilter={setT1Filter}/>
            <TypeFilter TFilter={setT2Filter}/>
          </div>
          <div className="flex justify-center mt-2 2xl:mb-2">
            <GenFilter />
          </div>
        </div>
        <div className="m-4 mx-auto text-gray-100 flex-col">
          <div className="flex justify-evenly mb-2">
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
    <div className="flex flex-col items-center justify-center mx-2">
      <span className="text-base mx-auto text-center truncate sm:text-2xl my-1 md:p-1 md:text-3xl">{text}</span>
      <button className={`flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 mx-auto text-gray-100 hover:text-red-500 hover:bg-gray-100 rounded hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg ${filter ? 'text-red-500 rounded-3xl bg-gray-100' : 'bg-red-500'}`} onClick={toggleFilter}>
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
    <input className='text-center rounded-3xl text-xl sm:text-3xl md:text-4xl 2xl:text-5xl w-3/4 2xl:w-full' onChange={handleInputChange} type="text" placeholder="Search Pokemon"/>
  );
}


const GenFilter = () => {
  const { setGenValue } =usePokedex()
  const handleInputChange = (e) => {
    console.log(e.target.value)
    setGenValue(e.target.value);
  };
  return (
    <select className="rounded-3xl text-center px-5 text-lg sm:text-2xl md:text-3xl 2xl:text-4xl" onChange={handleInputChange}>
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
    <select className="rounded-3xl text-center text-lg sm:text-2xl md:text-3xl 2xl:text-4xl" onChange={handleInputChange}>
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