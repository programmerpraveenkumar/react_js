import React, { useEffect, useState,useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {ContextTest} from '../ContextTest';
import './Headercss.css';
export default function Header(props){
    const[menu,setCurrentMenu]= useState("dashboard");
    const contxtValue = useContext(ContextTest);
    return(
   <div>
      value is from context {contxtValue.name}
<ul>    
    <li><NavLink activeClassName="active" to="/home">Home</NavLink></li>
    <li><NavLink activeClassName="active"  to="/pages/dashboard">dashboard</NavLink></li>
    <li><NavLink activeClassName="active" to="about">About</NavLink></li>
    <li><NavLink activeClassName="active" to="/pages/localstorage">Localstorage</NavLink></li>
    <li><NavLink activeClassName="active" to="/pages/ApiHeader">ApiHeader</NavLink></li>
    <li><NavLink activeClassName="active" to="/pages/conditionclass">Condition class</NavLink></li>
    <li><NavLink activeClassName="active" to="/pages/emp/">Employee Details</NavLink></li>
    </ul></div>)
}
