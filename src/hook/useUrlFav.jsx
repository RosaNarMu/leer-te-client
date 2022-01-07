import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { readings } from "../data/readings";
import { favorites } from "../data/favorites";

export function useUrlFav(id = '') {
    /* 
        const [readingSelectedDisplay, setReadingSelectedDisplay] = useState([]);
    
        useFetch('http://localhost:3000/profile', setReadingSelectedDisplay); */

    console.log(favorites);

    return favorites.find(reading => reading.id === id);
}