import React from 'react'
import './Hero.css'
import Typewriter from 'typewriter-effect'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

function Hero() {
  return (
    <div id = "home">
        <div className="hero-container">
            <div className="text">
            <h5>Hello there!</h5>
           <h2>I'm <span className="name"> Tokelo</span>  Foso</h2>
           <div className="role-container">
           <h2><span className="roles"> <Typewriter  options={{
                strings: ["Software Developer", "Web Developer", "Graphic Designer", "Music Producer", "Disk Jockey"],
                autoStart: true,
                loop: true,
                delay: 50
              }}/></span></h2> 
           </div>
           
              <p>Welcome to my website! On this webpage you will get to know more about me and the available services that I offer. 
                  If you have any questions, or inquiries on any of the available services, kindly use the live chat
                   feature below. Thank you!
            </p>
            </div>
           <div className ="icons-container">
                <FacebookIcon onClick={() => window.open('https://www.facebook.com')}/>
                
                <TwitterIcon/>
                <InstagramIcon/>
                <GitHubIcon/>
           </div>

        </div>
    </div>
  )
}

export default Hero