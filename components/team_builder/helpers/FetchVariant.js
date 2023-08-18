export default async function FetchVariant(searchQuery) {

    const queryParams = new URLSearchParams({
        pokemon_name: searchQuery,
    });
  
    const url = encodeURI(`${process.env.NEXT_PUBLIC_NEXT_API_URL}/variants/search?${queryParams}`)
  
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