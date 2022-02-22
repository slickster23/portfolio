import React from 'react'
import './Services.css'
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';

function Services() {
  return (
    <div id = "services">
        <div className="title">
            <h4>services</h4>
            </div>

            <div className="services-container">
                <div className="service-box">
                    <div className="icon">
                        <DesignServicesIcon className="icon-image"/>
                    </div>

                    <h3>Graphic Design</h3>
                    <p></p>
                </div>

                <div className="service-box">
                    <div className="icon">
                        <LanguageIcon className="icon-image"/>
                    </div>

                    <h3>Web Design</h3>
                    <p></p>
                </div>

                <div className="service-box">
                    <div className="icon">
                        <CodeIcon className="icon-image"/>
                    </div>

                    <h3>Software Development</h3>
                    <p></p>
                </div>
            </div>

            
        </div>
  )
}

export default Services