import Button from "../../SharedComponents/Button/Button"
import { useNavigate } from "react-router-dom"
import './NoFavStars.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const NoFavStars=()=>{
     const navigate=useNavigate();

    return (
        <div className="NoFav-container">
          <h2>My Favorite Characters</h2>
           <FavoriteIcon  className="fav-icon" />
          <h3>No favorites added yet</h3>
          <p>Add characters to your favorites list and they'll show up here.</p>
          <Button onClick={()=>navigate('/')}>Browse Characters</Button>
        </div>
    )
}

export default NoFavStars