// AUTH CONTEXT
import { createContext, useContext, useEffect, useState } from "react";


// Create AuthContext
const AuthContext = createContext()

// create useAuth hook
export const useAuth = () => {
   return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    

    return (
        <AuthContext.Provider
        value={{
            
        }}>
            {children}
        </AuthContext.Provider>
    )
}