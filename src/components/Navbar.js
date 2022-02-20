import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <div className="header-container">
            <div className="logo">
                <img src="/logo/Site Logo.png" alt="" />
            </div>
            
            <div className="nav-list">
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>

                    <li>
                        <a href="#about">About</a>
                    </li>


                    <li>
                        <a href="#services">Services</a>
                    </li>

                    <li>
                        <a href="#portfolio">Portfolio</a>
                    </li>

                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Navbar