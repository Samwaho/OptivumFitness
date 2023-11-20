export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "84d200c8e5msh28a5d9ce4213b11p1aff01jsn78c31f86e3a2",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youTubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
