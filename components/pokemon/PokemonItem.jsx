import React from 'react'

export default function PokemonItem({ pokemonData, variantData }) { 
  return (
        <div>
          {pokemonData.map((base) => {
            const variants = variantData.filter(
              (variant) => variant.pokedex_num === base.pokedex_num
            );
  
            return (
              <div className='border rounded w-3/4 my-3' key={base.id}>
                <h1 className='text-2xl font-semibold'>{base.pokedex_num} {base.base_name}</h1>
                {variants.length > 0 && (
                <>
                  <h2 className='text-2xl font-semibold'>{variants[0].type_1} {variants[0].type_2}</h2>
                  <img className='h-20 w-20' key={variants[0].id} src={`/pokemon_imgs/${variants[0].img_name}`} alt={variants[0].img_name}/>
                </>
              )}
              </div>
            );
          })}
        </div>
    );
}