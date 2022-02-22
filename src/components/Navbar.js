import React, {useEffect, useState} from 'react'
import './Navbar.css'

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)
    const [button, setButton] = useState(true)

    const showButton = () => {
        if(window.innerWidth <= 1653) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)
  return (

    

    <div>
        <div className="header-container">
            <div className="logo">
                <img src="/logo/Site Logo.png" alt="" />
            </div>

            <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>   
            </div>
            
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <a href="#home"  className='nav-links' onClick={closeMobileMenu}>Home</a>
                    </li>

                    <li className='nav-item'>
                        <a href="#about" className='nav-links'  onClick={closeMobileMenu}>About</a>
                    </li>


                    <li className='nav-item'>
                        <a href="#services" className='nav-links' onClick={closeMobileMenu}>Services</a>
                    </li>

                    <li className='nav-item'>
                        <a href="#portfolio" className='nav-links' onClick={closeMobileMenu}>Portfolio</a>
                    </li>

                    <li className='nav-item'>
                        <a href="#contact" className='nav-links' onClick={closeMobileMenu}>Contact</a>
                    </li>
                </ul>

        </div>

        
    </div>
  )
}

export default Navbar