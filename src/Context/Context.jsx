import React, {createContext, useState, useEffect } from "react";
import { getVideos } from "../API/services";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {

    const [videos,setVideos] = useState([]);

    // Fetch de datos

    const dataVideos = async () => {
        try{
            if(videos.length === 0){
                const data = await getVideos();
                setVideos(data)
            }
        }
         catch(error){
            console.error(error)
         }
    }

    // 

    useEffect(()=>{
        dataVideos()
    },[])

    return <VideosContext.Provider value={ {videos} }>
        { children }
    </VideosContext.Provider>
}