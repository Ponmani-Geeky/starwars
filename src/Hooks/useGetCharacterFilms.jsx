import { useEffect, useState } from "react"
import { getCharacterFilms } from "../API/Api";



export const useGetCharacterFilms=(filmsUrl)=>{
   const [films,setFilms]=useState([]);
   
   useEffect(()=>{
    const fetchFilms=async()=>{
        try{
            let results=await Promise.allSettled(filmsUrl.map((film)=>getCharacterFilms(film)));
            // Keep only successful responses
            const successfulResults = results.filter(response => response.status === "fulfilled")
            .map(response => response.value.data);
            setFilms(successfulResults);
         }
         catch(error){
           console.log('Error Occurred while fetching films');
         }
    }
    if(filmsUrl?.length>0){
        fetchFilms();
    }
   },[filmsUrl])

   return films
}