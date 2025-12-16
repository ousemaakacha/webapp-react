import React, { createContext, useState, useContext } from "react";

// creo la context per il loader
const LoaderContext = createContext();

// gestisco lo stato del loader
export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);  
  const stopLoading = () => setLoading(false);  

  return (
    <LoaderContext.Provider value={{ loading, startLoading, stopLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

//  hook per accedere al loader
export const useLoader = () => {
  return useContext(LoaderContext);
};
