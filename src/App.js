import "./App.css";

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from './components/Footer'
import { Bars } from "react-loader-spinner";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Navbar />
          <Hero />
          <About />
          <Services />
          {/* <Portfolio /> */}
          <Contact/>
          <Footer/>
        </div>
      ) : (
        <div className="spinner">
          <Bars color="#3b6da5" height={80} width={80} />
        </div>
      )}
    </>
  );
}

export default App;
