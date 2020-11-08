import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Headercss.css';
export default function ApiHeaderPages(){
  const sampleApiCallwithHeader=()=>{
        const token = localStorage.getItem("token");
        fetch("http://localhost:8080/contact/get",{headers:{
            'token':token
        }})
        .then((res)=>res.json())
        .then((res)=>{
          //json to strinfy
            //setName(JSON.stringify(res));
           //  setSalary('');
           //  setAge('');
        })
        let obj = {
            "name":"sample name","email":"sample email","message":"sample mesage"
        }
        fetch("http://localhost:8080/contact/store",{method: 'POST',
        body:JSON.stringify(obj),
        headers:{
            "content-type":"application/json",
            'token':token
            
        }})
        .then((res)=>res.json())
        .then((res)=>{
          //json to strinfy
            //setName(JSON.stringify(res));
           //  setSalary('');
           //  setAge('');
        })

  }
    return(
        <div>Api ApiHeaderPages
        <button onClick={sampleApiCallwithHeader}>click me to send api with headers</button>
        </div>
    )
}