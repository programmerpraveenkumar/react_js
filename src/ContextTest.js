import React, { useEffect, createContext, useState  } from 'react';

//common storage
export const ContextTest = createContext();

export const TestProvider = ({children})=>{
    const [name,setName] = useState('0');
    return(
        <ContextTest.Provider value={{name,setName}}>{children}</ContextTest.Provider>
    )
};