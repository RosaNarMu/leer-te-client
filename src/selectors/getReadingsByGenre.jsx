import { useState } from "react";

export function getReadingsByGenre(genre) {

    /*  const [filteredReadings, setFilteredReadings] = useState([])
 
 
     useEffect(() => {
         async function fetchData() {
             const response = await fetch('http://localhost:3000/readings-published')
             const data = await response.json();
             setFilteredReadings(data.slice(-4));
             console.log(data);
         }
 
         fetchData();
     }, [])
  */

    const validGenres = ['terror', 'fantasía', 'misterio', 'romance', 'ciencia ficción', 'no ficción'];

    if (validGenres.includes(genre)) {
        throw new Error(`${genre} is not a valid genre`);
    };

    return readings.filter(reading => reading.genre == genre);

}

