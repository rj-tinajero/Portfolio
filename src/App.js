import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Skills from './components/Skills';
import Widecard from './components/Widecard';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </div>
    </Router>
  );
}

export default App;
