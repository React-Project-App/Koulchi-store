import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { SentMessage } from "../../Actions/Contact";
import "../../CssFiles/contact.css"
import {SiGooglemaps} from 'react-icons/si'
import {BsTelephone} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import Information from "../../Components/Information/Information";
import FormContact from "../../Components/FormContact/FormContact";
import HeaderBlog from "../../Components/HeaderBlog/HeaderBlog";
function Contact() {
    
    
  return (
  <div className="content">
  <HeaderBlog title="CONTACT US"/>
    <div className="container  mb-5 ">
      
    <div>
{/* 
      <div className="text-center pt-2 info-header mb-5">
        <h1>Contact Us</h1>
      </div> */}
      <div className="row">
          
        <Information/>
        <FormContact/>
        
      </div>
      <div className="row my-3">
        <div className="col-12">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2653.5128195209236!2d-9.527200581374524!3d30.402633744414242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c9b7e7260a7f%3A0x4ef4d088a51fa8d3!2sTechnopark%20Agadir!5e0!3m2!1sen!2sma!4v1653929247349!5m2!1sen!2sma"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          style={{width:"100%" ,height:"500px" }}
          ></iframe>
        </div>
      </div>
    </div>

    </div>
  </div>

  );
}

export default Contact;
