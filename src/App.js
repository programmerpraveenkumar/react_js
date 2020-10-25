import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    // <Router>
    <div className="App">
      sample 
    
<Home/>
      {/*  <a href="home">Home</a>
      <a href="dashboard">dashboard</a>
      <a href="about">About</a> <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dash />
          </Route>
        </Switch> */}
    </div>
    // </Router>
  );
}



function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dash() {
  return (
    <div>
      <h2>Dash</h2>
    </div>
  );
}

export default App;
