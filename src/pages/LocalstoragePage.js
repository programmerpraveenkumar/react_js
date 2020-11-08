import React, { useEffect, useState } from 'react';
export default function LocalstoragePage(){
   const sessionStorageClick=()=>{
        sessionStorage.setItem("token","sample toek for session storage");
   }
   const localStorageClick=()=>{
    localStorage.setItem("token","sample toek for local storage");
}
    return (<div>
        <button onClick={localStorageClick}>set Localstorage</button>
        <button onClick={sessionStorageClick}>set Session Storage</button>
              

    </div>)
}