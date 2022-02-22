import React, {useState, useRef} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import { FormControl } from '@mui/material';
import { Input, TextField, Button } from '@mui/material'


function Contact() {
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
            <h4>Contact</h4>
            </div>
            <div className="form-container">
              <form ref={form} onSubmit={sendEmail}>
                  <div className="input-box">
                  <Input placeholder="Name" name="name" className="input" />
                  <Input placeholder="Email" name="email" className="input"  />
                  </div>

                 
              
              <Input placeholder="Message" name="message" className="text-field" multiline="true"/>
              <Button type = "submit" className="button">Submit</Button>
              </form>
          
        </div>

        {result.status === 200 ? <h4 style={{ textAlign:"center" }}>Your message has been successfully sent</h4> : <h4 style={{ textAlign: "center" }}></h4>}
    </div>
  )
}

export default Contact