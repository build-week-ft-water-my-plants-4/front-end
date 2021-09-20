import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ProtecRoute from './Login/ProtecRoute/ProtecRoute';
import './App.css';

function App() {
  const isLoggedin = localStorage.getItem("token");

  return (
    <Router>
     <div className="App">
      Garden of Eden
     </div>
    </Router>
  );
}

export default App;
