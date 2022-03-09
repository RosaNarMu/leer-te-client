import { createContext, useState, useEffect } from 'react';



const UseContextGeneral = createContext({
    token: {},
    user: false,
    admin: false,
    authenticate: () => { },
    logout: () => { }
});

export default UseContextGeneral;



export function UseContextGeneralProvider({ children }) {
    const [token, setToken] = useState({});
    const [user, setUser] = useState(false);
    const [admin, setAdmin] = useState(false);



    function authenticate() {
        setUser(true);
        console.log(user);
    }

    function logout() {
        setUser(false);
        setAdmin(false)
        console.log(user);

    }


    const value = {
        token,
        setToken,
        user,
        admin,
        setUser,
        setAdmin,
        authenticate,
        logout
    }

    return (
        <UseContextGeneral.Provider value={value}>{children}</UseContextGeneral.Provider>
    );
}