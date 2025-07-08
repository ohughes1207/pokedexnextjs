export default async function FetchFilteredPokemon(searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega, pageNum) {

  const queryParams = new URLSearchParams({
    searchQuery: searchQuery,
    T1: T1Filter,
    T2: T2Filter,
    GenValue: genValue,
    Legendary: isLegendary,
    Paradox: isParadox,
    Pseudo: isPseudoL,
    Ultrabeast: isUB,
    Myth: isMythical,
    Regional: isRegional,
    Mega: isMega,
    page: pageNum
  });

  const url = encodeURI(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/api/PokemonBase?${queryParams}`)

  console.log(url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const dataFetched = await response.json();

    return dataFetched;
  }
  catch (e) {
    console.error('Error fetching data:', e);
    throw e; // Rethrow the error to be caught by the caller if needed
  }
}