// AUTH CONTEXT
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


// SERVER API URL
// const apiUrl = "http://localhost:4000/api"
const apiUrl = "https://bussin.herokuapp.com/api"


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
      if (res.data.userToken) {
        localStorage.setItem("userToken", JSON.stringify(res.data.userToken))
        navigate("/")
      }
       return res.data.userToken  

    } catch (err) {
      setLoginMessage('Login Failed! Check Email or Password')
    }
  } 

  const checkCurrentUser = () => {
    const loggedInUser = localStorage.getItem("userData")
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setCurrentUser(foundUser)
    }
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
            setCurrentUser,
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}