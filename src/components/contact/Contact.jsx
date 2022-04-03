import React from 'react';
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import * as emailjs from "emailjs-com";

const Contact = ()=>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uanmje8', 'template_mfyhz8e', form.current,
    'tVF-Hu8CuLhi9DPRG')
    
    e.target.reset();
  };

  return(
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container ">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>rutikgagare091971@gmail.com</h5>
            <a href="mailto:rutikgagare091971@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Rutik Gagare</h5>
            <a href="https://m.me/rutik.gagare.04" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+91 123456789</h5>
            <a href="https://api.whatsapp.com/send?phone+918668504187" target="_blank">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Yout Full Name' required/>
          <input type="email" name='email' placeholder='Yout Email' required/>
          <textarea name="message" rows="5" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;