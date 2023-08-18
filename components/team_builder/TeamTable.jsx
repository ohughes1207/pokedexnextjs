import { useAmp } from 'next/amp'
import React, { useState } from 'react'

export default function TeamTable() {
  return (
    <table className='border border-black w-5/6 mx-auto mt-56'>
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


    const handleInputChange = (e, func) => {
        func(e.target.value);
      };
    
    return (
        <>
            <thead>
                <tr>
                    <th>Move Type</th>
                    <th className='w-32 mx-auto border border-black justify-center'>
                        <input value={TM1} onChange={(e) => handleInputChange(e, setTM1)}>

                        </input>
                        <div></div>
                    </th>
                    <th className='border border-black'>Pokemon 2</th>
                    <th>Pokemon 3</th>
                    <th>Pokemon 4</th>
                    <th>Pokemon 5</th>
                    <th>Pokemon 6</th>
                    <th>Total Resistances</th>
                    <th>Total Weaknesses</th>
                    <th>Total Immunities</th>
                </tr>
            </thead>
            <tbody>
                {[
                'Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Fighting',
                'Poison', 'Ground', 'Flying', 'Psychic', 'Bug', 'Rock', 'Ghost',
                'Dragon', 'Dark', 'Steel', 'Fairy'].map((typeName) => (
                <TableRow key={typeName} typeName={typeName} className={`${typeName.toLowerCase()}Card`}/>
                ))}
            </tbody>
        </>
    )
}


const TableRow = ({typeName}) => (
    <tr className=' text-center'>
        <th className={` border border-black bg-${typeName.toLowerCase()} `}>{typeName}</th>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>Res</td>
        <td>Weak</td>
        <td>Imm</td>
    </tr>
)