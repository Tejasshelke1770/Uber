import { createContext, useState } from "react";

export const CaptainContext = createContext();

export const CaptainProvider = ({ children }) => {

    const [captain, setCaptain] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [error, setError] = useState(null)

    const value = {captain, setCaptain, setIsLoading, setError, isLoading, error}
    
  return (
    <CaptainContext.Provider value={value}>
        {children}
    </CaptainContext.Provider>
  )
};
