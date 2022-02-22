import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={
          scrollPosition > 0 ? "header-container scroll" : "header-container"
        }
      >
        <div className="logo">
          <img src="/logo/Site Logo.png" alt="" />
        </div>

        <div className="menu-icon" onClick={() => setClick(!click)}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#home" className="nav-links">
              Home
            </a>
          </li>

          <li className="nav-item">
            <a href="#about" className="nav-links">
              About
            </a>
          </li>

          <li className="nav-item">
            <a href="#services" className="nav-links">
              Services
            </a>
          </li>

          <li className="nav-item">
            <a href="#portfolio" className="nav-links">
              Portfolio
            </a>
          </li>

          <li className="nav-item">
            <a href="#contact" className="nav-links">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div
        className={click ? "side-menu open" : "side-menu"}
        onClick={() => setClick(!click)}
      >
        <div className="side-container">
          <ul>
            <a href="#home">
              <li>Home</li>
            </a>
            <a href="#about">
              <li>About Me</li>
            </a>
            <a href="#services">
              <li>Services</li>
            </a>
          
            <a href="#portfolio">
              <li>Portfolio</li>
            </a>

            <a href="#contact">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
