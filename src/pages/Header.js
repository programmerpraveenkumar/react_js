import React, { useEffect, useState } from 'react';
import './Headercss.css';
export default function Header(props){
    const[menu,setCurrentMenu]= useState("dashboard");
    useEffect(function(){
        console.log(""+props.location);
    },[])
    return(
   
<ul>

    <li className={(props.currentmenu == 'home')?'active':''}><a href="home">Home</a></li>
    <li className={(props.currentmenu  == 'dashboard')?'active':''}><a href="dashboard">dashboard</a></li>
    <li className={(props.currentmenu  == 'about')?'active':''}><a href="about">About</a></li>
    <li>{props.currentmenu}</li>
    </ul>)
}
