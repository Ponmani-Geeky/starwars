import { createContext, useContext, useState } from "react";

const FavContext = createContext();

export const useFavContext = () => useContext(FavContext);

export const FavContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Function to add/remove favorite character
  const favCharacters = (character) => {
    setFavourites((prev) => {
      let isFav = prev.some((item) => item.name === character.name);
      return isFav ? prev.filter((item) => item.name !== character.name) : [...prev, character];
    });
  };

  // Function to update character properties
  const updateCharacter = (characterName, height, gender) => {
    setFavourites((prev) =>
      prev.map((charc) =>
        charc.name === characterName ? { ...charc, height, gender } : charc
      )
    );
  };

  return (
    <FavContext.Provider value={{ favourites, favCharacters, updateCharacter }}>
      {children}
    </FavContext.Provider>
  );
};
