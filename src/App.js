import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Dashboard from './pages/Dashboard'
import Loop from './pages/Loops';
import Header from './pages/Header';
import LocalstoragePage from './pages/LocalstoragePage';
import  ApiHeaderPages from './pages/ApiHeaderPages';
import ConditionclassPages from './pages/ConditionclassPages';
import  {TestProvider} from './ContextTest';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmpDetail from './pages/EmpDetail';
//npm install react-router-dom
function App() {
  const[name,setName]= useState('');
  const[chattext,setchattext]= useState('');
  
  const[currentmenu,setCurrentmenu]= useState('home');
  const[textbx,settextbx]= useState('');
  const btnClick=()=>{
    setName(textbx);
  }
  const tmp=()=>{
    console.log("sample")
  }
  const getData=()=>{
 
    fetch("http://localhost:8080/contact/get")
     .then((res)=>res.json())
     .then((res)=>{
       //json to strinfy
         setName(JSON.stringify(res));
        //  setSalary('');
        //  setAge('');
     })
  }
  useEffect(function(){
    //getData();
    console.log("some change")
  },[])
  useEffect(function(){
    //getData();
 console.log(chattext);
  },[chattext])
  //
  return (
    <TestProvider>
     <Router>
    <div className="App">
      
      <div>
      <input type="text" onChange={(e)=>settextbx(e.target.value)}/>
      <input type="text" placeholder="enter chat text" onChange={(e)=>setchattext(e.target.value)}/>
      <button onClick={btnClick}>Click me to send the data to other component</button>
    </div>
    {/* <Home name={name}/>
    <About name={name}/> */}
    <Header></Header>
     <Switch>
         <Route exact path="/">
            <Home />
            <Loop/>
          </Route>
          <Route exact path="/home">
            <Home />
            <p>this is router for HOme</p>
           
          </Route>
          <Route exact path="/about">
            <About />
            <p>this is router for About</p>
           
          </Route>
          
          <Route exact path="/pages/dashboard">
            <Dashboard />
            <p>this is router for dashboard</p>
          
          </Route>
          <Route exact path="/pages/localstorage">
            <LocalstoragePage />
          
          </Route>
          <Route exact path="/pages/ApiHeader">
            <ApiHeaderPages />
          
          </Route>
          <Route exact path="/pages/conditionclass">
            <ConditionclassPages />
          
          </Route>
          <Route exact path="/pages/emp/:emp_id">
            <EmpDetail />
          
          </Route>
        </Switch>
    </div>
    </Router>
    </TestProvider>
  );
}





export default App;
