// AUTH CONTEXT
import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';


// SERVER API URL
const apiUrl = "http://localhost:4000/api"


// Create AuthContext
const AuthContext = createContext()

// create useAuth hook
export const useAuth = () => {
   return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
// state hook for the current logged in user
const [currentUser, setCurrentUser] = useState()

// loginCall function for user login
const loginCall = async (userFound) => {
    try {
      const res = await axios.post(`${apiUrl}/auth/login`, userFound)
      setCurrentUser(res.data.userFound)
       
    } catch (err) {
      console.log(err)
    }
  } 

    return (
        <AuthContext.Provider
        value={{
            loginCall,
            currentUser,
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}