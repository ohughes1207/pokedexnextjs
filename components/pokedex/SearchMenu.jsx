import React from "react";
import { AiOutlineCheck } from "react-icons/ai"
import { useAtom, useSetAtom } from "jotai";
import { T1FilterAtom, T2FilterAtom, isLegendaryAtom, isMythicalAtom, isPseudoLAtom, isParadoxAtom, isRegionalAtom, isMegaAtom, isUBAtom, searchQueryAtom, genValueAtom } from "./PokedexAtoms";

export default function SearchMenu () {
  
  const [T1Filter, setT1Filter] = useAtom(T1FilterAtom);
  const [T2Filter, setT2Filter] = useAtom(T2FilterAtom);

  const [isLegendary, setIsLegendary] = useAtom(isLegendaryAtom);
  const [isMythical, setIsMythical] = useAtom(isMythicalAtom);
  const [isPseudoL, setIsPseudoL] = useAtom(isPseudoLAtom);
  const [isParadox, setIsParadox] = useAtom(isParadoxAtom);
  const [isRegional, setIsRegional] = useAtom(isRegionalAtom);
  const [isMega, setIsMega] = useAtom(isMegaAtom);
  const [isUB, setIsUB] = useAtom(isUBAtom);
  

  return (
    <div className="bg-red-500 mt-32 w-11/12 p-1 mx-auto sm:w-4/5 lg:w-3/4 xl:w-11/12 rounded-3xl 2xl:w-3/4 xl:h-96">
      <div className="flex flex-col xl:flex-row ">
        <div className="rounded-3xl mx-auto shadow-lg w-11/12 lg:w-5/6 xl:w-fit p-4 sm:p-6 xl:py-8 h-min my-auto 2xl:w-1/3 2xl:py-4 2xl:px-3">
          <div className="flex justify-center mt-4">
            <SearchBar />
          </div>
          <div className="flex justify-around px-5 my-2 sm:my-4 xl:my-8 2xl:px-0 2xl:my-10">
            <TypeFilter TValue={T1Filter} TFilter={setT1Filter}/>
            <TypeFilter TValue={T2Filter} TFilter={setT2Filter}/>
          </div>
          <div className="flex justify-center mt-2 2xl:mb-2">
            <GenFilter />
          </div>
        </div>
        <div className="m-4 2xl:m-2 mx-auto text-gray-100 flex-col">
          <div className="flex justify-evenly mb-2 lg:mb-4">
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
    setFilter(!filter)
  }; 

  return (
    <div className="flex flex-col mx-2 2xl:mx-5 2xl:my-1">
      <span className="text-base mx-auto text-center truncate sm:text-2xl my-1 md:p-1 md:text-3xl">{text}</span>
      <button className={`flex items-center justify-center w-16 h-16 sm:w-24 sm:h-24 mx-auto text-gray-100 hover:text-red-500 hover:bg-gray-100 rounded hover:rounded-3xl transition-all duration-300 ease-linear cursor-pointer shadow-lg ${filter ? 'text-red-500 rounded-3xl bg-gray-100' : 'bg-red-500'}`} onClick={toggleFilter}>
        <AiOutlineCheck size="85"/>
      </button>
    </div>
  )
}

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useAtom(searchQueryAtom);
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };  
  return (
    <input className='text-center rounded-3xl text-xl sm:text-3xl md:text-4xl 2xl:text-5xl w-3/4 2xl:w-full' onChange={handleInputChange} value={searchQuery} type="text" placeholder="Search Pokemon"/>
  );
}


const GenFilter = () => {
  const [genValue, setGenValue] = useAtom(genValueAtom)
  const handleInputChange = (e) => {
    setGenValue(e.target.value);
  };
  return (
    <select className="rounded-3xl text-center px-5 text-lg sm:text-2xl md:text-3xl 2xl:text-4xl" onChange={handleInputChange} value={genValue}>
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

const TypeFilter = ( { TValue, TFilter }) => {
  
  const handleInputChange = (e) => {
    TFilter(e.target.value);
  };
  return (
    <select className="rounded-3xl text-center text-lg sm:text-2xl md:text-3xl 2xl:text-4xl" onChange={handleInputChange} value={TValue}>
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