import { useEffect, useState } from "react";
import "./CharacterDetails.css"
import { useParams } from "react-router-dom";
import { getCharacterDetails } from "../../API/Api";
import Button from "../../SharedComponents/Button/Button";
import { useGetHomeWorld } from "../../Hooks/useGetHomeWorld";
import { useGetCharacterFilms } from "../../Hooks/useGetCharacterFilms";
import { useGetCharacterStarships } from "../../Hooks/useGetCharacterStarships";
import { useFavContext } from "../../Context/FavContext/FavContext";

const CharacterDetails=()=>{
    const { characterId } = useParams();
    const {favourites,favCharacters}=useFavContext();
    const [characterDetails,setCharactersDetails]=useState();
    const homeworld=useGetHomeWorld(characterDetails?.homeworld);
    const films=useGetCharacterFilms(characterDetails?.films);
    const starships=useGetCharacterStarships(characterDetails?.starships);
    const [isFavorite,setIsFavorite]=useState(false);

    useEffect(()=>{
        if(characterId){
        getCharacterDetails(characterId).then((res)=>{
            console.log(res.data);
            setCharactersDetails(res.data);
        })
    }
    },[characterId])

    useEffect(()=>{
        setIsFavorite(favourites?.find((item)=>item.name==characterDetails?.name))
    },[favourites])
    
    const handlefav=()=>{
        favCharacters(characterDetails)
    }

    return (
        <div className="character-container">
          <div className="character-heading">
            <h1 className="character-name">{characterDetails?.name}</h1>
            {isFavorite?<Button onClick={handlefav}>Remove From Favorites</Button>:<Button onClick={handlefav}>Add to Favorites</Button>}
          </div>
           <div className="character-features">
             <div><span className="features-key">Gender:</span><span className="features-value">{characterDetails?.gender}</span></div>
             <div><span className="features-key">Home World:</span><span className="features-value">{homeworld}</span></div>
             <div><span className="features-key">Hair Color:</span><span className="features-value">{characterDetails?.hair_color}</span></div>
             <div><span className="features-key">Skin Color:</span><span className="features-value">{characterDetails?.skin_color}</span></div>
             <div><span className="features-key">Eye Color:</span><span className="features-value">{characterDetails?.eye_color}</span></div>
             <div><span className="features-key">Mass:</span><span className="features-value">{characterDetails?.mass}</span></div>
             <div><span className="features-key">Height:</span><span className="features-value">{characterDetails?.height}</span></div>
             <div><span className="features-key">Birth Year:</span><span className="features-value">{characterDetails?.birth_year}</span></div>
           </div>
            <h2 className="character-name">Character Films and Starships</h2>
           <div className="film_starships">
            <div className="character-films">
                <h3 className="sub-title">Films:</h3>
                <ul>
                {films?.length>0?films.map((film)=>{
                    return <li key={film.title}>{film.title}</li>
                }):<li>No films found</li>}
                </ul>
            </div>
            <div className="character-starships">
            <h3 className="sub-title">Starships:</h3>
            <ul>
                {starships?.length>0?starships.map((starship)=>{
                    return <li key={starship.name}>{starship.name}</li>
                }):<li>No starships found</li>}
                </ul>
            </div>
           </div>
        </div>
    )
}

export default CharacterDetails