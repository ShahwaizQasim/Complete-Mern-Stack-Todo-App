import { useEffect, useState } from "react";
import { createContext } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router";
import axios from "axios";
import { APP_ROUTES } from "../constant/AppRoutes";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {

    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            const token = Cookies.get('token');
            if (token) {
                getUser(token);
            } else {
                <Navigate to={'signUp'} />
            }
        }
    }, [user])

    const getUser = async (token) => {
        try {
            const user = await axios.get(APP_ROUTES.userInfo, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUser(user?.data?.user)
        } catch (error) {
            console.log('error in context=>', error);
        }
    }

    console.log('user in context', user);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}