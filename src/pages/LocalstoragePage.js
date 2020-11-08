import React, { useContext, useEffect, useState } from 'react';
import {ContextTest} from '../ContextTest';
export default function LocalstoragePage(){
   const sessionStorageClick=()=>{
        sessionStorage.setItem("token","sample toek for session storage");
   }
   const localStorageClick=()=>{
    localStorage.setItem("token","sample toek for local storage");
    }
    const useContextTest = useContext(ContextTest);
    const action =(type)=>{        
        //let current_no = parseInt(useContextTest.name);
        if(type == "+"){                         
           // current_no++;
           //useContextTest.setName(useContextTest.name++);
            useContextTest.setName(prevstate=>parseInt(prevstate)+1)
        }else{
            useContextTest.setName(useContextTest.name--);
           // current_no--;
           useContextTest.setName(prevstate=>parseInt(prevstate)-1)
        }
       // useContextTest.setName(current_no);
    }
    return (<div>
        <button onClick={localStorageClick}>set Localstorage</button>
        <button onClick={sessionStorageClick}>set Session Storage</button>
        <div>
        <button onClick={()=>action("+")}>+</button>  
        {useContextTest.name}        
        <button onClick={()=>action("-")}>-</button>
        </div>
    </div>)
}