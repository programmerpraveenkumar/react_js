import React, { useEffect, createContext, useState, useReducer  } from 'react';
const initialState = 0;
const reducer = (state, action) => { 
    console.log(action.type)  ;
  switch (action.type) {
    case 'inc': return state + 1;
    case 'dec': return state - 1;
    default: throw new Error('Unexpected action');
  }
};
//common storage
export const ContextTest = createContext();

// export const TestProvider = ({children})=>{
//     const [name,setName] = useState('0');
//     return(
//         <ContextTest.Provider value={{name,setName}}>{children}</ContextTest.Provider>
//     )
// };

export const TestProvider = ({children})=>{
    const contextValue = useReducer(reducer, initialState);
    return(
        <ContextTest.Provider value={contextValue}>{children}</ContextTest.Provider>
    )
};