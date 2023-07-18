export default function SearchPokemon(pokemon, searchQuery) {
  return searchQuery.toLowerCase() === '' ? pokemon : pokemon.base_name.toLowerCase().includes(searchQuery.toLowerCase())
}