import React from 'react'
import { useState, useRef } from 'react';
import './contact.scss'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tnqoeih', 'template_pnzi5g1', formRef.current, 'uWd-w0S8gudJmHXME')
        .then((result) => {
            setSuccess(false);
            console.log(result.text);
        }, (error) => {
            setError(true);
            console.log(error.text);
        });
    };

  return (
    <div className='contact'>
      <div className="textContainer">
        <h1>Reach us out!</h1>
        <div className="item">
            <h2>Email</h2>
            <span>sh.suyan16@gmail.com</span>
        </div>
        <div className="item">
            <h2>Phone</h2>
            <span>+977 9861609800</span>
        </div>
        <div className="item">
            <h2>Address</h2>
            <span>Gurjudhara, Chandragiri-17 <br />Kathmandu, Nepal</span>
        </div>
      </div>

      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" required placeholder='Name' name="user_name"/>
            <input type="email" required placeholder='Email' name="user_email"/>
            <textarea rows={8} placeholder='Enter your message' name="user_message"/>
            <button>Send message</button>
            {error && "Error"}
            {success && 'Success'}

        </form>
      </div>
    </div>
  )
}

export default Contact
