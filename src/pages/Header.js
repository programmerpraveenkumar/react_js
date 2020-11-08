import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Headercss.css';
export default function Header(props){
    const[menu,setCurrentMenu]= useState("dashboard");
   
    return(
   
<ul>
      
    <li><NavLink activeClassName="active" to="home">Home</NavLink></li>
    <li><NavLink activeClassName="active"  to="/pages/dashboard">dashboard</NavLink></li>
    <li><NavLink activeClassName="active" to="about">About</NavLink></li>
    <li><NavLink activeClassName="active" to="/pages/localstorage">Localstorage</NavLink></li>
    <li><NavLink activeClassName="active" to="/pages/ApiHeader">ApiHeader</NavLink></li>
    <li><NavLink activeClassName="active" to="/pages/conditionclass">Condition class</NavLink></li>
    </ul>)
}
