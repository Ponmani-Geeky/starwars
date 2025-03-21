import React, { useEffect, useState } from "react";
import Card from "../../SharedComponents/Card/Card";
import "./DisplayStars.css";
import { getAllStars } from "../../API/Api";
import Button from "../../SharedComponents/Button/Button";

const initialUrl = `https://swapi.py4e.com/api/people/?page=1`;
const DisplayStars = () => {
  const [characters, setCharacters] = useState();
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    getAllStars(initialUrl)
      .then((res) => {
        setCharacters(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
      })
      .catch((err) => {
        console.log("Error occured while fetching stars", err);
      });
  }, []);

  const getstars = (url) => {
    getAllStars(url)
      .then((res) => {
        setCharacters(res.data.results);
        setNext(res.data.next);
        setPrev(res.data.previous);
      })
      .catch((err) => {
        console.log("Error occured while fetching stars", err);
      });
  };

  const handlePrev = () => {
    getstars(prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNext = () => {
    getstars(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container">
      <h2 className="title">Star War Characters</h2>
      <div className="characters">
        {characters &&
          characters.map((characterData) => {
            return (
              <Card key={characterData.created} character={characterData} />
            );
          })}
      </div>
      <div className="pagination-btn">
        <Button onClick={handlePrev} disabled={prev == null ? true : false}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={next == null ? true : false}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default DisplayStars;
