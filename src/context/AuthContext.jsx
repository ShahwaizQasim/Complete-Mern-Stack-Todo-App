import { useEffect, useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            const token = Cookies.get('token');
            console.log(token);
            if (token) {
                getUser();
            } else {
                <Navigate to={'signUp'} />
            }
        }
    }, [user])

    const getUser = async () => {
        try {

        } catch (error) {

        }
    }

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}