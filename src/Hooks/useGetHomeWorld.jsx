import { useState,useEffect } from "react"
import { getHomeWorld } from "../API/Api";


export const useGetHomeWorld=(homeworldurl)=>{
   const [homeworld,setHomeworld]=useState('');

   useEffect(()=>{
    if(homeworldurl){
     getHomeWorld(homeworldurl)?.then((res)=>{
      setHomeworld(res.data.name);
     }).catch((err)=>{
      console.log('error occured while fetching homeworld',err);
     })
    }
   },[homeworldurl])




   return homeworld


}