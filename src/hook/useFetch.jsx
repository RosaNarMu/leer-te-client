import { useEffect } from "react";

export function useFetch(URL, setState, responseField) {
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => setState(responseField ? data[responseField] : data))
    }, [URL, setState, responseField])
}