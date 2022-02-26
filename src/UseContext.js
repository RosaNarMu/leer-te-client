import { createContext, useState, useEffect } from 'react';



const UseContextGeneral = createContext({
    token: {},
    user: null,
    authenticate: () => { },
    logout: () => { }
});

export default UseContextGeneral;



export function UseContextGeneralProvider({ children }) {
    const [token, setToken] = useState({});
    const [user, setUser] = useState(null);



    function authenticate() {
        setUser(true);
        console.log(user);
    }

    function logout() {
        setUser(false);
        console.log(user);

    }


    const value = {
        token,
        setToken,
        user,
        setUser,
        authenticate,
        logout
    }

    return (
        <UseContextGeneral.Provider value={value}>{children}</UseContextGeneral.Provider>
    );
}