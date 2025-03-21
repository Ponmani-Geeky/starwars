import Navbar from "./SharedComponents/Navbar/Navbar";
import Footer from "./SharedComponents/Footer/Footer";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Button from "./SharedComponents/Button/Button";
import FavButton from "./SharedComponents/FavButton/Favbutton";
import Card from "./SharedComponents/Card/Card";
import DisplayStars from "./Components/DisplayStars.jsx/DisplayStars";
import {FavContextProvider} from './Context/FavContext/FavContext'
import DisplayFavStars from "./Components/DisplayFavStars/DisplayFavStars";
import CharacterDetails from "./Components/CharacterDetails/CharacterDetails";

export default function App() {
  return (
    <FavContextProvider>
    <Router>
    <div className="App">
      <Navbar/>
              <Routes>
                    <Route path="/" element={<DisplayStars/>} />
                    <Route path="/favorites" element={<DisplayFavStars/>} />
                    <Route path='/character/:characterId' element={<CharacterDetails/>}/>
                </Routes>
      <Footer />
    </div>
    </Router>
    </FavContextProvider>
    
  );
}
