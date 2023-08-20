import React, { useEffect, useMemo, useState } from 'react'
import FetchVariant from './helpers/FetchVariant';
import GetVariantResist from './helpers/GetVariantResist';
import GetTotalResist from './helpers/GetTotalResist';
import GetTotalWeak from './helpers/GetTotalWeakness';
import GetTotalImmune from './helpers/GetTotalImmune';

export default function TeamTable() {
  return (
    <table className='border border-black mx-auto mt-56 w-5/6'>
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
                    <th>Move Type</th>
                    <TeamMember  setFunc={setTM1} TM={TM1}/>
                    <TeamMember  setFunc={setTM2} TM={TM2}/>
                    <TeamMember  setFunc={setTM3} TM={TM3}/>
                    <TeamMember  setFunc={setTM4} TM={TM4}/>
                    <TeamMember  setFunc={setTM5} TM={TM5}/>
                    <TeamMember  setFunc={setTM6} TM={TM6}/>
                    <th className='border border-black w-fit'>Total Resistances</th>
                    <th className='border border-black w-fit'>Total Weaknesses</th>
                    <th className='border border-black w-fit'>Total Immunities</th>
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

        <th className=' mx-auto border border-black justify-center relative w-fit'>
            <input className='text-center border border-black w-full' value={TM.var_name} onChange={(e) => handleInputChange(e, setFunc)} type="text" placeholder="Search Pokemon">
            </input>

            <SearchResultsList searchData={searchData} setFunc={setFunc}/>
        </th>
    )
}


const SearchResultsList = ({searchData, setFunc}) => (

    <div className='w-full border border-black absolute mt-3 bg-slate-100 flex-col flex overflow-y-scroll h-[50vh]'>
        {searchData?.map((variant) =>
        <button className='text-sm border border-black py-0.5' onClick={(e) => setFunc(variant)}>{variant.var_name}</button>
        )}
    </div>
)


const TableRow = ({typeName, TM1, TM2, TM3, TM4, TM5, TM6}) => {

    const Team = [TM1, TM2, TM3, TM4, TM5, TM6]

    const TM1Resists = useMemo(() => GetVariantResist(TM1, typeName.toLowerCase()), [TM1]);
    const TM2Resists = useMemo(() => GetVariantResist(TM2, typeName.toLowerCase()), [TM2]);
    const TM3Resists = useMemo(() => GetVariantResist(TM3, typeName.toLowerCase()), [TM3]);
    const TM4Resists = useMemo(() => GetVariantResist(TM4, typeName.toLowerCase()), [TM4]);
    const TM5Resists = useMemo(() => GetVariantResist(TM5, typeName.toLowerCase()), [TM5]);
    const TM6Resists = useMemo(() => GetVariantResist(TM6, typeName.toLowerCase()), [TM6])

    const totalResist = useMemo(() => GetTotalResist(Team, typeName.toLowerCase()), [Team]);
    const totalWeak = useMemo(() => GetTotalWeak(Team, typeName.toLowerCase()), [Team]);
    const totalImmune = useMemo(() => GetTotalImmune(Team, typeName.toLowerCase()), [Team]);

    return (
        <tr className='text-center'>
            <th className={` border border-black bg-${typeName.toLowerCase()} `}>{typeName}</th>
            <td className=''>{TM1Resists}</td>
            <td className=''>{TM2Resists}</td>
            <td className=''>{TM3Resists}</td>
            <td className=''>{TM4Resists}</td>
            <td className=''>{TM5Resists}</td>
            <td className=''>{TM6Resists}</td>
            <td className=''>{totalResist}</td>
            <td className=''>{totalWeak}</td>
            <td className=''>{totalImmune}</td>
        </tr>
    )
}