import React from 'react'
import './About.css'
import Button from '@mui/material/Button'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function About() {
  return (
    <div id ='about'>
        <div className="title">
            <h4>About Me</h4>
        </div>

        <div className="about-me">
            <div className="img-container">
                <img src="/img/me2.jpg" alt="" />
            </div>

            <div className="text-container">

                <h3>"Allow me to reintroduce myself..."</h3>
                <p>I’m Tokelo Foso, I am a 22-year-old aspiring 
                    software and web developer from the Mountain Kingdom of Lesotho. 
                    I am a recent graduate from Monash University with a Bachelor 
                    of Computer and Information Sciences degree majoring in Software Development 
                    and Mobile Systems. </p>

                    <p>One of my core skills also includes graphic design and I have delivered a plethora 
                        of design artworks for some of my clients. For more information:</p>

                        <Button variant="outlined">Download Resume</Button>
            </div>
        </div>

        <div className="tech-stack">

            <div className="stack-container">
                <Carousel  className = "carousel"  swipeable = "true" centerMode= "true" interval={600} centerSlidePercentage={20}infiniteLoop="true" width="100%" showArrows="true">
                <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" />

            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />

            </div>


            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" />
            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />

            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />

            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg" />
            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />

            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" />

            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" />
            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            </div>

            <div class="box-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
            </div>                  
                </Carousel>
            </div>
        </div>

        <div id = "resume">

        <div className="title">
            <h4>resume</h4>
        </div>

        <div className="timeline-container">
            <VerticalTimeline>
                <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{  color: '#000', borderTop:'5px solid #5498e6' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}>
<h3 className="vertical-timeline-element-title" style={{ fontWeight: '400', color: '#4e8cd3' }}>Records Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">Elizabeth Glazer Pediatric Aids Foundation</h4>
    <p className="vertical-timeline-element-description" style={{ fontWeight: '200' }}>
    Logging data into a web-based platform for COVID-19 vaccinations
    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{  color: '#000', borderTop:'5px solid #5498e6' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}>
<h3 className="vertical-timeline-element-title" style={{ fontWeight: '400', color: '#4e8cd3' }}>Freelance Graphic Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Osmium Lesotho</h4>
    <p className="vertical-timeline-element-description" style={{ fontWeight: '200' }}>
    Designed visual graphics for Osmium brand and all associated clients
    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline>
                <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{  color: '#000', borderTop:'5px solid #5498e6'}}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2018 - 2021"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}>
<h3 className="vertical-timeline-element-title" style={{ fontWeight: '400', color: '#4e8cd3' }}>Bachelor of Computer & Information Sciences</h3>
    <h4 className="vertical-timeline-element-subtitle">Monash University</h4>
    <p className="vertical-timeline-element-description" style={{ fontWeight: '200' }}>
    Majors studied : Mobile Systems & Software Development
    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{  color: '#000', borderTop:'5px solid #5498e6' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2014 - 2016"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<SchoolIcon />}>
<h3 className="vertical-timeline-element-title" style={{ fontWeight: '400', color: '#4e8cd3' }}>International General Certificate in Secondary Education</h3>
    <h4 className="vertical-timeline-element-subtitle">Machabeng College</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>

            
        </div>
        </div>
    </div>
  )
}

export default About