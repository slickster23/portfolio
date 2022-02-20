import React from 'react'
import './Portfolio.css'

import Gallery from 'react-grid-gallery';

function Portfolio() {

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
        }

      ];
  return (
    <div id = "portfolio">
        <div className="title">
            <h4>portfolio</h4>
        </div>

        <div className="gallery-container">
        <Gallery margin ={10} images={PHOTO_SET} />
        </div>
    </div>
  )
}

export default Portfolio