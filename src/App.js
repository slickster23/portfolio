import logo from './logo.svg';
import './App.css';

import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/pages/About'
import Services from './components/pages/Services'
import Portfolio from './components/pages/Portfolio'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Portfolio/>
      
    </div>
  );
}

export default App;
