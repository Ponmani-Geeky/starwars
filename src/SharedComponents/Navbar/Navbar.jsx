import "./Navbar.css";
import { Link } from "react-router-dom";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img
        src="https://seminal-fe-test-demo.vercel.app/image/star-wars.png"
        alt="Logo"
        className="logo"
      />

      <Link className="heart-button" to={"/favorites"}><FavoriteOutlinedIcon style={{color:'white'}}/></Link>
    </nav>
  );
};

export default Navbar;
