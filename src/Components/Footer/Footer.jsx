import React, { useEffect, useState } from 'react'
import "../../CssFiles/style.css"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {BiMoney,BiSupport} from "react-icons/bi"
import {FiTruck} from "react-icons/fi"

 
function Footer() {
  const CartProducts= useSelector(state=>state.Cart)
  const [loading,setloading]=useState(true);

  useEffect(()=>{
    if(CartProducts.length>0) setloading(false)
    else setloading(!loading)

  },[CartProducts])
     
  return (
    // min-height: calc(100vh - 356px)  ;
    <footer className="bg-dark text-center text-white ">
    {/* <!-- Grid container --> */}
    <div className="container p-4 ">

 
      {/* <!-- Section: Social media --> */}
      <section className="mb-4">
        {/* <!-- Facebook --> */}
        <a className="shadow-none btn btn-outline-light btn-floating m-1 bg-white" href="#" role="button">
        <BsFacebook/></a>
        {/* <!-- Twitter --> */}
        <a className=" shadow-none btn btn-outline-light btn-floating m-1 bg-white" href="#" role="button">
          <BsTwitter/></a>
        {/* <!-- Google --> */}
        <a className="shadow-none btn btn-outline-light btn-floating m-1 bg-white" href="#" role="button">
          <BsGoogle/></a>
        {/* <!-- Instagram --> */}
        <a className="shadow-none btn btn-outline-light btn-floating pb-2 bg-white" href="#" role="button">
          <BsInstagram/></a>

        {/* <!-- Github --> */}
        <a className="shadow-none btn btn-outline-light btn-floating m-1 bg-white" href="#" role="button">
         <BsGithub/></a>
      </section>
      <section className="row">
        <div className="d-flex justify-content-center">
          <p className="pt-2">
            <strong>Register for free</strong>
          </p>
          {/* <button type="button" className=""> */}
            <Link to="/Signup" className='shadow-none text-light btn btn-outline-warning mb-4 ms-3'>SIGN UP!</Link> 
          {/* </button> */}
        </div>
      </section>
      <section className="mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
          repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
          eum harum corrupti dicta, aliquam sequi voluptate quas.
        </p>
      </section>
    </div>

    {/* <!-- Copyright --> */}
    <div className="text-center p-3" style={{backgroundColor:'rgba(0, 0, 0, 0.2)'}}>
      © 2020 Copyright: koulchi team
    </div>
    {/* <!-- Copyright --> */}
  </footer>
  )
}

export default Footer
