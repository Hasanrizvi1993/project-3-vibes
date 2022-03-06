// AUTH CONTEXT
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
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
// loginMessage hook
const [loginMessage, setLoginMessage] = useState('')
// useNavigate hook for redirect
const navigate = useNavigate();

// loginCall function for user login
const loginCall = async (userFound) => {
    try {
      const res = await axios.post(`${apiUrl}/auth/login`, userFound)
      setCurrentUser(res.data.userFound)
      localStorage.setItem("userData", JSON.stringify(res.data.userFound))
      if (res.data.token) {
        localStorage.setItem("userToken", JSON.stringify(res.data.token))
        navigate("/")
      }
       return res.data.token  

    } catch (err) {
      setLoginMessage('Login Failed! Check Email or Password')
    }
  } 

  const checkCurrentUser = () => {
    let user = localStorage.getItem("userToken")
    return JSON.parse(user)
}


  const logout = () => {
    localStorage.removeItem("userToken")
    localStorage.removeItem("userData")
  }


   useEffect(() => {
    const loggedInUser = localStorage.getItem("userData")
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setCurrentUser(foundUser)
    
    }
    
  }, []) 
 


    return (
        <AuthContext.Provider
        value={{
            loginCall,
            logout,
            checkCurrentUser, 
            currentUser,
            loginMessage,
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}