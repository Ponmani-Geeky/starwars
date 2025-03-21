import React from "react";
import "./FavButton.css";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';

const FavButton = ({onClickFav,favourite}) => {
  return (
    <button
      className={`favorite-button ${favourite ? "favorited" : ""}`}
      onClick={onClickFav}
    >
    {favourite?<FavoriteOutlinedIcon color="primary"/> : <FavoriteBorderOutlinedIcon color="primary"/>}
      <span className="tooltip">
        {favourite ? "Remove from Fav" : "Add to Fav"}
      </span>
    </button>
  );
};

export default FavButton;
