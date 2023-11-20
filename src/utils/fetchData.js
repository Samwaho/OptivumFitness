export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b597edacaemsh869e773db0273c1p16a288jsn43d6a7f8dcc5",
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
