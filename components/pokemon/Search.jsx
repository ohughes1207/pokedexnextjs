import React, { useEffect, useState } from 'react'
import SearchPokemon from './hooks/SearchPokemon';

export default function Search( { onSearch }) {

  const [searchQuery, setSearchQuery] = useState('')

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    onSearch(searchQuery)
  };

  return (
    <form className=''>
      <input
        className='mb-10'
        value={searchQuery}
        onChange={handleInputChange}
        type="text"
      />
    </form>
  );
  }