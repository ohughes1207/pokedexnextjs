export default function FilterPokemon(pokemon, searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega) {    
  
  let filteredPokemon = pokemon.filter(poke => poke.base_name.toLowerCase().includes(searchQuery.toLowerCase()));

  if (T1Filter) {
    filteredPokemon = filteredPokemon.filter(poke => poke.variants[0].type_1.toLowerCase().includes(T1Filter.toLowerCase()) || poke.variants[0].type_2?.toLowerCase().includes(T1Filter.toLowerCase()));
  }
  if (T2Filter) {
    if (T2Filter === T1Filter) {
      filteredPokemon = filteredPokemon.filter(poke => (!poke.variants[0].type_2))
    }
    else {
      filteredPokemon = filteredPokemon.filter(poke => poke.variants[0].type_1.toLowerCase().includes(T2Filter.toLowerCase()) || poke.variants[0].type_2?.toLowerCase().includes(T2Filter.toLowerCase()));
    }
  }
  if (isLegendary) {
    filteredPokemon = filteredPokemon.filter(poke => poke.legendary == isLegendary);
  }
  if (isParadox) {
    filteredPokemon = filteredPokemon.filter(poke => poke.paradox === isParadox);
  }
  if (isPseudoL) {
    filteredPokemon = filteredPokemon.filter(poke => poke.pseudo_legendary === isPseudoL);
  }
  if (isUB) {
    filteredPokemon = filteredPokemon.filter(poke => poke.ultrabeast === isUB);
  }
  if (isRegional) {
    filteredPokemon = filteredPokemon.filter(poke => poke.variants && poke.variants.some(variant => variant.regional));
  }
  if (isMega) {
    filteredPokemon = filteredPokemon.filter(poke => poke.variants && poke.variants.some(variant => variant.mega));
  }
  if (isMythical) {
    filteredPokemon = filteredPokemon.filter(poke => poke.mythical === isMythical);
  }
  if (genValue) {
    filteredPokemon = filteredPokemon.filter(poke => poke.gen == genValue);
  }
  return filteredPokemon;
}


/*
  if (T1Filter !== '') {
    filteredPokemon = filteredPokemon.filter(poke => poke.variants.some(variant => variant.type_1.toLowerCase().includes(T1Filter.toLowerCase()) || variant.type_2?.toLowerCase().includes(T1Filter.toLowerCase())));
  }
  if (T2Filter !== '') {
    filteredPokemon = filteredPokemon.filter(poke => poke.variants.some(variant => variant.type_1.toLowerCase().includes(T2Filter.toLowerCase()) || variant.type_2?.toLowerCase().includes(T2Filter.toLowerCase())));
  }
*/