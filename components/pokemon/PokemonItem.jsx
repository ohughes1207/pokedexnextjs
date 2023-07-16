import React from 'react'

export default function PokemonItem({ pokemonData, variantData }) { 
  return (
        <div>
          {pokemonData.map((base) => {
            const variants = variantData.filter(
              (variant) => variant.pokedex_num === base.pokedex_num
            );
  
            return (
              <div className='p-2 border rounded' key={base.id}>
                <h1 className='text-2xl font-semibold'>{base.base_name}</h1>
                <h2 className='text-xl font-semibold'>{base.pokedex_num}</h2>
                {variants.length > 0 && (
                <img className='h-20 w-20' key={variants[0].id} src={`/pokemon_imgs/${variants[0].img_name}`}/>
              )}
              </div>
            );
          })}
        </div>
    );
}