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
            <h4> <span>About</span> Me</h4>
        </div>

     
     

        <div className="about-me">
            <div className="img-container">
                <img src="/img/me.jpg" alt="" />
            </div>

            <div className="text-container">

                <h3>"Allow me to reintroduce myself..."</h3>
                <p>I’m Tokelo Foso, I am a 22-year-old aspiring 
                    software and web developer from the Mountain Kingdom of Lesotho. 
                    I am a recent graduate from Monash University with a Bachelor 
                    of Computer and Information Sciences degree majoring in Software Development 
                    and Mobile Systems. </p>

                    <p>Throughout the course of my career, I have been involved in a plethora of projects whilst using
                         various modern technologies and languages ranging from software and web development.</p>

                    <p>One of my core skills also includes graphic design, with this I have been associated with a numerous
                        amount of clients of which I have been able to design artworks for and bring their visions to reality.</p>

                        <div  className ="download-btn" >
                            <a href="/TOKELO FOSO.pdf">Download Resume</a>
                        </div>
            </div>
        </div>

        <div className="tech-stack">

            <div className="stack-container">
                <Carousel  showStatus = {false} className = "carousel"  showThumbs = {false} swipeable = {true} centerMode= {true} interval={600} centerSlidePercentage={50}infiniteLoop={true} width="100%" showArrows={true}>
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
            <h4><span>My</span> Resume</h4>
        </div>

        <div className="timeline-container">
            <VerticalTimeline>
                <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{  color: '#000', borderTop:'5px solid rgb(228, 8, 45)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(228, 8, 45)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(228, 8, 45)', color: '#fff' }}
    icon={<WorkIcon />}>
<h3 className="vertical-timeline-element-title" >Records Assistant</h3>
    <h4 className="vertical-timeline-element-subtitle">Elizabeth Glazer Pediatric Aids Foundation</h4>

                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{  color: '#000', borderTop:'5px solid rgb(228, 8, 45)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(228, 8, 45)' }}
    date="2021 - present"
    iconStyle={{ background: 'rgb(228, 8, 45)', color: '#fff' }}
    icon={<WorkIcon />}>
<h3 className="vertical-timeline-element-title" >Freelance Graphic Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Osmium Lesotho</h4>
  
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline>
                <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{  color: '#000', borderTop:'5px solid rgb(228, 8, 45)'}}
    contentArrowStyle={{ borderRight: '7px solid rgb(228, 8, 45)' }}
    date="2018 - 2021"
    iconStyle={{ background: 'rgb(228, 8, 45)', color: '#fff' }}
    icon={<SchoolIcon />}>
<h3 className="vertical-timeline-element-title" >Bachelor of Computer & Information Sciences</h3>
    <h4 className="vertical-timeline-element-subtitle">Monash University</h4>
    <p className="vertical-timeline-element-description" style={{ fontWeight: '300' }}>
    Majors studied : Mobile Systems & Software Development
    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement className="vertical-timeline-element--work"
    contentStyle={{  color: '#000', borderTop:'5px solid rgb(228, 8, 45)' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(228, 8, 45)' }}
    date="2014 - 2016" dateClassName={'date'}
    iconStyle={{ background: 'rgb(228, 8, 45)', color: '#fff' }}
    icon={<SchoolIcon />}>
<h3 className="vertical-timeline-element-title" >International General Certificate in Secondary Education</h3>
    <h4 className="vertical-timeline-element-subtitle">Machabeng College</h4>
                </VerticalTimelineElement>
            </VerticalTimeline>
         
            
        </div>
        </div>
    </div>
  )
}

export default About