import React, {useState, useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { FormControl } from '@mui/material';
import { Input, TextField, Button } from '@mui/material'
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';

import MyLocationIcon from '@mui/icons-material/MyLocation';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import EmailIcon from '@mui/icons-material/Email'

function Contact() {

  const containerStyle = {
    width: '80vh',
    height: '250px',
   
  };
  const options = { closeBoxURL: '', enableEventPropagation: true };


  const coordinates = {
    "lat": -29.37762372072468,
    "lng": 27.55010891857367
  }
        const [result, setResult] = useState([]);
        const [submit, setSubmit] = useState(false);
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_bjv2psc', 'template_f4pph5j', form.current, 'user_GDLOiCyVg9Ua56x2SE38Y')
            .then((result) => {
                setResult(result);
                
            }, (error) => {
                console.log(error.text);
            });
            setSubmit(true);
        };
      
  return (
    <div id ="contact">
        <div className="title">
            <h4><span>Contact</span> Me</h4>
            </div>


          <div className="contact-container">
            
            <div className="map-container">
            <LoadScript googleMapsApiKey="AIzaSyA4x_uwF1U8Dezn2xciKYwgcRmPInk1tbQ">

            <GoogleMap className="map"
            mapContainerStyle={containerStyle}
            center={coordinates}
            zoom={16}
            style={{width: '100%', height: '70vh', position: 'relative'}}>
 
      <Marker position={coordinates}/>
   
      </GoogleMap>
              </LoadScript>
              </div>
            
            <div className="form-container">
            <h4>Got a query? Simply fill the form below and I'll get back to you.</h4>
              <form ref={form} onSubmit={sendEmail}>
                  <div className="input-box">
                  <Input placeholder="Name" name="name" className="input" />
                  <Input placeholder="Email" name="email" className="input"  />
                  </div>

                 
              
              <Input placeholder="Message" name="message" className="text-field" multiline="true"/>
              <Button type = "submit" className="button" >Submit</Button>
              </form>
          
        </div>
        </div>

        {result.status === 200 ? <h4 style={{ textAlign:"center" }}>Your message has been successfully sent</h4> : <h4 style={{ textAlign: "center" }}></h4>}

        <div className="details-container">

          <div className="box">
          <MyLocationIcon className = "icon"/>
         <p>Ha Matala Phase 2</p>
         <p>Maseru, Lesotho</p>
          </div>

          
          <div className="box">
          <PhoneAndroidIcon className = "icon"/>
         <p>(+266) 6823 1628</p>
         <p>(+266) 5676 9106</p>
          </div>

          
          <div className="box">
         <EmailIcon className = "icon"/>
         <p>hello@tokelofoso.online</p>
     
          </div>
          </div>
    </div>
  )
}

export default Contact