export default async function FetchFilteredPokemon(searchQuery, T1Filter, T2Filter, genValue, isLegendary, isParadox, isPseudoL, isUB, isMythical, isRegional, isMega, pageNum) {

  const queryParams = new URLSearchParams({
    pokemon_name: searchQuery,
    T1: T1Filter,
    T2: T2Filter,
    genValue: genValue,
    Leg: isLegendary,
    Para: isParadox,
    Pseudo: isPseudoL,
    UB: isUB,
    Myth: isMythical,
    Regional: isRegional,
    Mega: isMega,
    page: pageNum
  });

  const url = encodeURI(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/pokemon/filter?${queryParams}`)

  console.log(url);

  try {
    console.log('Checkpoint 1');

    const response = await fetch(url);
    if (!response.ok) {
      console.log('Checkpoint 2');
      throw new Error('Network response was not ok');
    }
    console.log('Checkpoint 3');
    const dataFetched = await response.json();
    //console.log('Fetched data:', data);

    return dataFetched;
  }
  catch (e) {
    console.error('Error fetching data:', e);
    throw e; // Rethrow the error to be caught by the caller if needed
  }
}