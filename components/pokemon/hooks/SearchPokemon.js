export default function SearchPokemon(pokemon, searchQuery, T1Filter, T2Filter) {
  return searchQuery.toLowerCase() === '' ? pokemon : pokemon.base_name.toLowerCase().includes(searchQuery.toLowerCase())
}