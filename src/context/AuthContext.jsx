import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext()

const AuthContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        const storedIsAuth = localStorage.getItem('isAuth');
        if (storedIsAuth) {
          setIsAuth(JSON.parse(storedIsAuth));
        }
      }, []);

    return (
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider