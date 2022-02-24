import React from "react";
import "./Hero.css";
import Typewriter from "typewriter-effect";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import image from "./images/Website background.png";
function Hero() {
  return (
    <div id="home">
      <div className="hero-container">
        <img src={image} alt="" />
        <div className="text">
          <h2>
            I'm <span className="name"> Tokelo</span> Foso
          </h2>
          <div className="role-container">
            <h2>
              <span className="roles">
                {" "}
                <Typewriter
                  options={{
                    strings: [
                      "Software Developer",
                      "Web Developer",
                      "Graphic Designer",
                      "Music Producer",
                      "Disk Jockey",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 30,
                  }}
                />
              </span>
            </h2>
          </div>

          <p>
            Welcome to my website! On this webpage you will get to know more
            about me and the available services that I offer. If you have any
            questions, or inquiries on any of the available services, kindly use
            the live chat feature below. Thank you!
          </p>
        </div>
        <div className="icons-container">
          <FacebookIcon className = "icon"
            onClick={() => window.open("https://www.facebook.com/tfoso23")}
          />

          <TwitterIcon className = "icon"   onClick={() => window.open("https://www.twitter.com/slxkstr")}/>
          <InstagramIcon className = "icon"  onClick={() => window.open("https://www.instagram.com/slickstargram")} />
          <GitHubIcon className = "icon"   onClick={() => window.open("https://www.githyb.com/slickster23")} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
