import { useEffect, useState } from "react"
import { getcharacterStarships } from "../API/Api";



export const useGetCharacterStarships=(starshipsUrl)=>{
   const [starships,setStarShip]=useState([]);
   
   useEffect(()=>{
    const fetchstarships=async()=>{
        try{
            let results=await Promise.allSettled(starshipsUrl.map((starship)=>getcharacterStarships(starship)));
            // Keep only successful responses
            const successfulResults = results.filter(response => response.status === "fulfilled")
            .map(response => response.value.data);
            setStarShip(successfulResults);
         }
         catch(error){
     
         }
    }
    if(starshipsUrl?.length>0){
       fetchstarships();
    }
   },[starshipsUrl])

   return starships
}