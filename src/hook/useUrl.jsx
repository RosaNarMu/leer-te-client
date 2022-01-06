import { useEffect, useState } from "react";
import { useFetch } from "./useFetch";

export function useUrl(id = '') {

    const [readingSelectedDisplay, setReadingSelectedDisplay] = useState([]);

    useFetch('http://localhost:3000/profile', setReadingSelectedDisplay);

    console.log(readingSelectedDisplay.favorites);

    return readingSelectedDisplay.favorites.filter(reading => reading.id === id);
}