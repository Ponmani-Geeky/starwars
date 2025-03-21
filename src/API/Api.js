import axios from "axios";

export const getAllStars = (url) =>axios.get(url);

export const getHomeWorld=(url)=>axios.get(url);

export const getCharacterDetails=(characterId)=>axios.get(`https://swapi.py4e.com/api/people/${characterId}/`);

export const getCharacterFilms=(url)=>axios.get(url);

export const getcharacterStarships=(url)=>axios.get(url);