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


export default function TeamTable() {
  return (
    <table className='mx-auto w-5/6 mt-48 bg-slate-200 border-2 border-zinc-600'>
        <TableColumns />
    </table>
  )
}


const TableColumns = () => {
    const [TM1, setTM1] = useState('');
    const [TM2, setTM2] = useState('');
    const [TM3, setTM3] = useState('');
    const [TM4, setTM4] = useState('');
    const [TM5, setTM5] = useState('');
    const [TM6, setTM6] = useState('');

    
    return (
        <>
            <thead>
                <tr>
                    <th className='border-2 border-zinc-600'>Move Type</th>
                    <TeamMember  setFunc={setTM1} TM={TM1}/>
                    <TeamMember  setFunc={setTM2} TM={TM2}/>
                    <TeamMember  setFunc={setTM3} TM={TM3}/>
                    <TeamMember  setFunc={setTM4} TM={TM4}/>
                    <TeamMember  setFunc={setTM5} TM={TM5}/>
                    <TeamMember  setFunc={setTM6} TM={TM6}/>
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

const TeamMember = ({setFunc, TM}) => {
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        FetchVariant(TM)
          .then(filteredData => {
            setSearchData(filteredData);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
        }, [TM]);

    const handleInputChange = (e, func) => {
        func(e.target.value);
      };
    return (
        <th className={`border-b-2 border-zinc-600 mx-auto justify-center relative w-fit ${TM.type_1 ? `bg-${GetTypeStyle(TM.type_1)}` : 'bg-slate-200'} `}>
            <input className={`text-center w-full ${TM.type_1 ? `bg-${GetTypeStyle(TM.type_1)}` : 'bg-slate-200'}`} value={TM.var_name} onChange={(e) => handleInputChange(e, setFunc)} type="text" placeholder="Search Pokemon">
            </input>

            <SearchResultsList searchData={searchData} setFunc={setFunc}/>
        </th>

    )
}


const SearchResultsList = ({searchData, setFunc}) => (

    <div className={` w-full absolute top-full transition-all duration-500 grid ${searchData ? 'grid-rows-[minmax(0,1fr)]' : ' grid-rows-[minmax(0,1fr)]'} `}>
        <div className=' overflow-hidden '>
            <div className={` bg-gray-100 max-h-[50vh] flex-col flex overflow-y-scroll transition-all duration-500 ${searchData ? ' translate-y-0' : ' -translate-y-full'}`}>
                {searchData?.map((variant) =>
                <button className='transition-all duration-300 text-sm py-0.5 hover:bg-red-500 hover:text-gray-100' onClick={(e) => setFunc(variant)}>{variant.var_name}</button>
                )}
            </div>
        </div>
    </div>


)


const TableRow = ({typeName, TM1, TM2, TM3, TM4, TM5, TM6}) => {

    const Team = [TM1, TM2, TM3, TM4, TM5, TM6]

    const TM1Resists = useMemo(() => GetVariantResist(TM1, typeName.toLowerCase()), [TM1]);
    const TM2Resists = useMemo(() => GetVariantResist(TM2, typeName.toLowerCase()), [TM2]);
    const TM3Resists = useMemo(() => GetVariantResist(TM3, typeName.toLowerCase()), [TM3]);
    const TM4Resists = useMemo(() => GetVariantResist(TM4, typeName.toLowerCase()), [TM4]);
    const TM5Resists = useMemo(() => GetVariantResist(TM5, typeName.toLowerCase()), [TM5]);
    const TM6Resists = useMemo(() => GetVariantResist(TM6, typeName.toLowerCase()), [TM6]);

    const totalResist = useMemo(() => GetTotalResist(Team, typeName.toLowerCase()), [Team]);
    const totalWeak = useMemo(() => GetTotalWeak(Team, typeName.toLowerCase()), [Team]);
    const totalImmune = useMemo(() => GetTotalImmune(Team, typeName.toLowerCase()), [Team]);


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