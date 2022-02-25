import { createContext, useState, useEffect } from 'react';



const UseContextGeneral = createContext({
    token: {}
});

export default UseContextGeneral;



export function UseContextGeneralProvider({ children }) {
    const [token, setToken] = useState({});

    const value = {
        token,
        setToken
    }

    return (
        <UseContextGeneral.Provider value={value}>{children}</UseContextGeneral.Provider>
    );
}