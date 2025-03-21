import "./Card.css";
import PublicIcon from '@mui/icons-material/Public';
import CakeIcon from '@mui/icons-material/Cake';
import WcIcon from '@mui/icons-material/Wc';
import Face2Icon from '@mui/icons-material/Face2';
import HeightIcon from '@mui/icons-material/Height';
import ScaleIcon from '@mui/icons-material/Scale';
import Button from "../Button/Button";
import FavButton from "../FavButton/Favbutton";
import {useNavigate } from "react-router-dom";
import { useFavContext } from "../../Context/FavContext/FavContext";
import { useGetHomeWorld } from "../../Hooks/useGetHomeWorld";
import ModalComponent from "../Modal/Modal";
import { useState } from "react";

const CharacterCard = ({ character,DisplayFav }) => {
   const navigate=useNavigate();
   const {favourites,favCharacters}=useFavContext();
   const homeworld=useGetHomeWorld(character.homeworld);
   const [EditCharacter,setEditCharacter]=useState(false);

   const handleFavCharacter=()=>{
      favCharacters(character)
   }

   const isFav=()=>{
    return favourites?.find((item)=>item.name==character?.name);
   }

   const ViewCharacterDetail=(characterId)=>{
      console.log(characterId)
      navigate(`/character/${characterId}`);
   }

   const getCharacterId=(url)=>{
     const parts = url.split("/");
     const lastNumber = parts[parts.length - 2];

     return lastNumber;
   }

   const handleEditCharacter=()=>{
    setEditCharacter(true)
   }

  return (
    <>
    <div className="card">
      <div className="card-heading">
      <h2 className="card-title">{character.name}</h2>
      {!DisplayFav&&<FavButton onClickFav={handleFavCharacter} favourite={isFav()}/>}
      </div>
       <div>
         <div className="card-details">
          <div className="card-keys">
         <PublicIcon color="primary"/>
         <p className="character-key">Home World:</p>
         </div>
         <div>
          <p>{homeworld}</p>
          </div>
         </div>

         <div className="card-details">
          <div className="card-keys">
         <CakeIcon color="primary"/>
         <p className="character-key">Birth Year:</p>
         </div>
         <div>
          <p>{character.birth_year}</p>
          </div>
         </div>
         <div className="card-details">
          <div className="card-keys">
         <WcIcon color="primary"/>
         <p className="character-key">Gender:</p>
         </div>
         <div>
          <p>{character.gender}</p>
          </div>
         </div>
         <div className="card-details">
          <div className="card-keys">
         <Face2Icon color="primary"/>
         <p className="character-key">Hair Color:</p>
         </div>
         <div>
          <p>{character.hair_color}</p>
          </div>
         </div>
         <div className="card-details">
          <div className="card-keys">
         <HeightIcon color="primary"/>
         <p className="character-key">Height:</p>
         </div>
         <div>
          <p>{character.height}</p>
          </div>
         </div>
         <div className="card-details">
          <div className="card-keys">
         <ScaleIcon color="primary"/>
         <p className="character-key">Mass:</p>
         </div>
         <div>
          <p>{character.mass}</p>
          </div>
         </div>
       </div>
       {DisplayFav?
        <div className="fav-buttons">
          <Button className="detail-button" onClick={handleEditCharacter}>Edit</Button>
          <Button className="remove-button" onClick={handleFavCharacter}>Remove</Button>
        </div>:
        <Button className="detail-button" onClick={()=>ViewCharacterDetail(parseInt(getCharacterId(character.url)))}>View Detail</Button>
      }
    </div>
    {EditCharacter&&<ModalComponent characterName={character?.name} height={character?.height} gender={character?.gender} openModel={EditCharacter} setEditCharacter={setEditCharacter}/>}
    </>
  );
};

export default CharacterCard;
