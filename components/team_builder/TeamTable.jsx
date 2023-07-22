import React from 'react'

export default function TeamTable() {
  return (
    <table className='border border-black w-3/4 mx-auto mt-56'>
        <TableColumns />
    </table>
  )
}

const TableColumns = () => (
    <>
        <thead>
            <tr>
                <th>Move Type</th>
                <th>Pokemon 1</th>
                <th>Pokemon 2</th>
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
            <TableRow key={typeName} typeName={typeName} />
            ))}
        </tbody>
    </>
)


const TableRow = ({typeName}) => (
    <tr>
        <th className='border border-black'>{typeName}</th>
    </tr>
)