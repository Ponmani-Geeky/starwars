import { useFavContext } from "../../Context/FavContext/FavContext"
import Card from '../../SharedComponents/Card/Card'
import NoFavStars from "./NoFavStars";
import './DisplayFavStars.css';


const DisplayFavStars=()=>{
    const {favourites}=useFavContext();

    return (
        <div>
        {favourites.length>0&&<h2 className="fav-title">My Favorite Characters</h2>}
        <div className="Fav-container">
        {favourites.length>0&&favourites.map((item)=>{
            return(
              <Card key={item.created} character={item} DisplayFav={true}/>)
        })}
        </div>
        {favourites.length==0&&<NoFavStars/>}
        </div>
    )
}

export default DisplayFavStars