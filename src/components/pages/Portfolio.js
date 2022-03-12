import React from 'react'
import './Portfolio.css'
import { render } from 'react-dom';
import LanguageIcon from '@mui/icons-material/Language';


import ResponsiveGallery from "react-responsive-gallery";

function Portfolio() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

    const PHOTO_SET = [
        {
          src: '/img/gallery/After Party.png',
          thumbnail: '/img/gallery/After Party.png'
        },
        {
            src: '/img/gallery/Graceful Fridays 2.png',
            thumbnail: '/img/gallery/Graceful Fridays 2.png'
        },
        {
            src: '/img/gallery/Course of True Love.png',
          thumbnail: '/img/gallery/Course of True Love.png'
          },

          {
            src: '/img/gallery/Ladies Love Fridays.png',
            thumbnail: '/img/gallery/Ladies Love Fridays.png'
          },

          {
            src: '/img/gallery/Kasi Moments.png',
            thumbnail: '/img/gallery/Kasi Moments.png'
          },

          {
            src: '/img/gallery/Jobe.jpg',
            thumbnail: '/img/gallery/Jobe.jpg'
          },
          {
            src: '/img/gallery/AIHL.png',
          thumbnail: '/img/gallery/AIHL.png'
          },
          {
            src: '/img/gallery/Lapeng.png',
            thumbnail: '/img/gallery/Lapeng.png'
          },
          {
            src: '/img/gallery/Linaleli Logo.png',
            thumbnail: '/img/gallery/Linaleli Logo.png'
          },
          {
            src: '/img/gallery/Bomwasi Logo Mockup.png',
            thumbnail: '/img/gallery/Bomwasi Logo Mockup.png'
          },

          {
          src: '/img/gallery/Mockup.png',
          thumbnail: '/img/gallery/Mockup.png'
        },

        {
          src: '/img/gallery/Slick Production Mix.jpg',
          thumbnail: '/img/gallery/Slick Production Mix.jpg'
        }

      ];
  return (
    <div id = "portfolio">
        <div className="title">
            <h4><span>My</span> Portfolio</h4>
        </div>

      

        <div className="gallery-container">
        <ResponsiveGallery useLightBox images={PHOTO_SET} />
        </div>

        <div className="title">
            <h4><span>Web</span> Portfolio</h4>
        </div>
        <div className = "web-portfolio">
          <div className="box">
            <div className="image">
            <img src="/img/gallery/covid19.png" alt="" />
            </div>

            <div className="info">
        
        <a href="https://slickster23.github.io/covid-19-tracker/" target="_blank">
        <LanguageIcon className = "webicon"   style={{ fontSize: 50 }}/>
          </a> 
          </div>
            </div>

            <div className="box">
            <div className="image">
            <img src="/img/gallery/osmium.png" alt="" />
            </div>

            <div className="info">
        
        <a href="https://www.osmium.co.ls" target="_blank">
        <LanguageIcon className = "webicon"  style={{ fontSize: 50 }}/>
          </a> 
          </div>
            </div>

            <div className="box">
            <div className="image">
            
            <a href="https://restaurant-locator.netlify.app/">
              <img src="/img/gallery/restaurant.png" alt=""/>
                </a>
            
            </div>

          <div className="info">
        
            <a href="https://restaurant-locator.netlify.app/" target="_blank">
            <LanguageIcon className = "webicon"  style={{ fontSize: 50 }}/>
              </a>
           
              
              </div>
            </div>
         
        
        </div>


    </div>
  )
}

export default Portfolio