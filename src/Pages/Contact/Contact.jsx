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
  <>
  <HeaderBlog title="CONTACT US"/>
    <div className="container content  ">
      
    <div>
{/* 
      <div className="text-center pt-2 info-header mb-5">
        <h1>Contact Us</h1>
      </div> */}
      <div className="row">
          
        <Information/>
        <FormContact/>
        
      </div>
    </div>

    </div>
  </>

  );
}

export default Contact;
