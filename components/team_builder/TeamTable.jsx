import React, { useEffect, useMemo, useState } from 'react'


import FetchVariant from './helpers/FetchVariant';
import GetVariantResist from './helpers/GetVariantResist';
import GetTotalResist from './helpers/GetTotalResist';
import GetTotalWeak from './helpers/GetTotalWeakness';
import GetTotalImmune from './helpers/GetTotalImmune';
import GetTypeStyle from "../pokedex/helpers/GetTypeStyle";
import GetResistStyle from './helpers/GetResistStyle';
import GetWeaknessStyle from './helpers/GetWeaknessStyle';
import GetImmuneStyle from './helpers/GetImmuneStyle';
import GetTMStyle from './helpers/GetTMStyle';
import { useAtom } from 'jotai';

import { TM1Atom, TM2Atom, TM3Atom, TM4Atom, TM5Atom, TM6Atom } from './TeamTableAtoms';
import { useResetAtom } from 'jotai/utils';




export default function TeamTable() {
  return (
    <table className='mx-auto 2xl:w-5/6 mt-48 bg-slate-200 border-2 border-zinc-600'>
        <TableColumns />
    </table>
  )
}


const TableColumns = () => {
    const [TM1, setTM1] = useAtom(TM1Atom);
    const [TM2, setTM2] = useAtom(TM2Atom);
    const [TM3, setTM3] = useAtom(TM3Atom);
    const [TM4, setTM4] = useAtom(TM4Atom);
    const [TM5, setTM5] = useAtom(TM5Atom);
    const [TM6, setTM6] = useAtom(TM6Atom);

    
    return (
        <>
            <thead>
                <tr>
                    <th className='border-2 border-zinc-600'>Move Type</th>
                    <TeamMember atom={TM1Atom} />
                    <TeamMember atom={TM2Atom} />
                    <TeamMember atom={TM3Atom} />
                    <TeamMember atom={TM4Atom} />
                    <TeamMember atom={TM5Atom} />
                    <TeamMember atom={TM6Atom} />
                    <th className='w-fit border-2 border-zinc-600'>Total Resistances</th>
                    <th className='w-fit border-2 border-zinc-600'>Total Weaknesses</th>
                    <th className='w-fit border-2 border-zinc-600'>Total Immunities</th>
                </tr>
            </thead>
            <tbody>
                {[
                'Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting',
                'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost',
                'Dragon', 'Dark', 'Steel', 'Fairy'].map((typeName) => (
                <TableRow key={typeName} typeName={typeName} TM1={TM1} TM2={TM2} TM3={TM3} TM4={TM4} TM5={TM5} TM6={TM6} className={`${typeName.toLowerCase()}Card`}/>
                ))}
            </tbody>
        </>
    )
}

const TeamMember = ({ atom }) => {
  const [TM, setFunc] = useAtom(atom);
  const resetTM = useResetAtom(atom);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (
      TM?.variantName &&
      typeof TM.variantName === 'string' &&
      TM.variantName.trim().length > 0 &&
      TM.manuallySelected !== true
    ) {
      FetchVariant(TM.variantName)
        .then(setSearchData)
        .catch(console.error);
    } else {
      setSearchData([]);
    }
  }, [TM?.variantName]);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.trim() === '') {
      resetTM();
      setSearchData([]);
      return;
    }

    setFunc({
      ...TM,
      variantName: value,
      manuallySelected: false
    });
  };

  const handleResultClick = (variant) => {
    setFunc({
      ...variant,
      manuallySelected: true
    });
    setSearchData([]);
  };

  return (
    <th
      className={`border-b-2 border-zinc-600 mx-auto justify-center relative w-fit ${
        TM?.pokemonType1 ? `bg-${GetTypeStyle(TM.pokemonType1)}` : 'bg-slate-200'
      }`}
    >
      <input
        className={`text-center w-full ${
          TM?.pokemonType1 ? `bg-${GetTypeStyle(TM.pokemonType1)}` : 'bg-slate-200'
        }`}
        onChange={handleInputChange}
        value={TM?.variantName ?? ''}
        type="text"
        placeholder="Search Pokemon"
      />
      <SearchResultsList searchData={searchData} onSelect={handleResultClick} />
    </th>
  );
};




const SearchResultsList = ({ searchData, onSelect }) => (
  <div className="w-full absolute top-full transition-all duration-500 grid grid-rows-[minmax(0,1fr)]">
    <div className="overflow-hidden">
      <div className="bg-gray-100 max-h-[40vh] flex-col flex overflow-y-scroll transition-all duration-500">
        {searchData?.map((variant) => (
          <button
            key={variant.varId}
            className="transition-all duration-300 text-sm py-0.5 hover:bg-red-500 hover:text-gray-100"
            onClick={() => onSelect(variant)}
          >
            {variant.variantName}
          </button>
        ))}
      </div>
    </div>
  </div>
);


const TableRow = ({typeName, TM1, TM2, TM3, TM4, TM5, TM6}) => {

    const Team = useMemo(() => [TM1, TM2, TM3, TM4, TM5, TM6], [TM1, TM2, TM3, TM4, TM5, TM6])


    const TM1Resists = useMemo(() => TM1.combinedDefenses?.[typeName], [TM1, typeName]);
    //const TM1Resists = useMemo(() => GetVariantResist(TM1, typeName.toLowerCase()), [TM1, typeName]);
    const TM2Resists = useMemo(() => TM2.combinedDefenses?.[typeName], [TM2, typeName]);
    const TM3Resists = useMemo(() => TM3.combinedDefenses?.[typeName], [TM3, typeName]);
    const TM4Resists = useMemo(() => TM4.combinedDefenses?.[typeName], [TM4, typeName]);
    const TM5Resists = useMemo(() => TM5.combinedDefenses?.[typeName], [TM5, typeName]);
    const TM6Resists = useMemo(() => TM6.combinedDefenses?.[typeName], [TM6, typeName]);

    const totalResist = useMemo(() => GetTotalResist(Team, typeName), [Team, typeName]);
    const totalWeak = useMemo(() => GetTotalWeak(Team, typeName), [Team, typeName]);
    const totalImmune = useMemo(() => GetTotalImmune(Team, typeName), [Team, typeName]);


    const TM1ResistStyle = useMemo(() => GetTMStyle(TM1Resists), [TM1Resists]);
    const TM2ResistStyle = useMemo(() => GetTMStyle(TM2Resists), [TM2Resists]);
    const TM3ResistStyle = useMemo(() => GetTMStyle(TM3Resists), [TM3Resists]);
    const TM4ResistStyle = useMemo(() => GetTMStyle(TM4Resists), [TM4Resists]);
    const TM5ResistStyle = useMemo(() => GetTMStyle(TM5Resists), [TM5Resists]);
    const TM6ResistStyle = useMemo(() => GetTMStyle(TM6Resists), [TM6Resists]);

    const totalResistStyle = useMemo(() => GetResistStyle(totalResist), [totalResist]);
    const totalWeaknessStyle = useMemo(() => GetWeaknessStyle(totalWeak), [totalWeak]);
    const totalImmuneStyle = useMemo(() => GetImmuneStyle(totalImmune), [totalImmune]);



    return (
        <tr className='text-center '>
            <th className={`bg-${typeName.toLowerCase()} py-1 rounded-sm`}>{typeName}</th>
            <td className={` ${TM1ResistStyle} transition-colors duration-300 border-r border-zinc-300`}>{TM1Resists}</td>
            <td className={` ${TM2ResistStyle}  transition-colors duration-300 border-r border-zinc-300`}>{TM2Resists}</td>
            <td className={` ${TM3ResistStyle}  transition-colors duration-300 border-r border-zinc-300`}>{TM3Resists}</td>
            <td className={` ${TM4ResistStyle}  transition-colors duration-300 border-r border-zinc-300`}>{TM4Resists}</td>
            <td className={` ${TM5ResistStyle}  transition-colors duration-300 border-r border-zinc-300`}>{TM5Resists}</td>
            <td className={` ${TM6ResistStyle}  transition-colors duration-300 border-r border-zinc-300`}>{TM6Resists}</td>
            <td className={` ${totalResistStyle}  transition-colors duration-300 border-r border-zinc-300`}>{totalResist}</td>
            <td className={` ${totalWeaknessStyle}  transition-colors duration-300 border-r border-zinc-300`}>{totalWeak}</td>
            <td className={` ${totalImmuneStyle}  transition-colors duration-300`}>{totalImmune}</td>
        </tr>
    )
}