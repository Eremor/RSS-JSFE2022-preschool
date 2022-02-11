const url = 'https://api.themoviedb.org/3';
const apiKey = '72132a7840ff14ff4afbc54dee598889';

export const getPopular = async (category='tv') => {
  const popularUrl = `${url}/trending/${category}/week?api_key=${apiKey}`;
  const res = await fetch(popularUrl);
  const data = await res.json();

  return data.results;
}

export const getQuery = async (query) => {
  const queryUrl = `${url}/search/movie?api_key=${apiKey}&query=${query}`;
  const res = await fetch(queryUrl);
  const data = await res.json();

  return data.results;
}