
import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";
import { readings } from "../data/readings";

import { unlocked } from "../data/unlocked";

export function useUrlUnlocked(id = '') {
    /* 
        const [readingSelectedDisplay, setReadingSelectedDisplay] = useState([]);
    
        useFetch('http://localhost:3000/profile', setReadingSelectedDisplay); */

    console.log(unlocked);

    return unlocked.find(reading => reading.id === id);
}