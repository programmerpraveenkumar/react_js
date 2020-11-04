import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Headercss.css';
export default function Header(props){
    const[menu,setCurrentMenu]= useState("dashboard");
    useEffect(function(){
         


    },[])
    return(
   
<ul>
      
    <li><NavLink activeClassName="active" to="home">Home</NavLink></li>
    <li><NavLink activeClassName="active"  to="dashboard">dashboard</NavLink></li>
    <li><NavLink activeClassName="active" to="about">About</NavLink></li>
    
    </ul>)
}
