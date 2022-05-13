import React from 'react'
import "../../CssFiles/style.css"
import {BsFacebook} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsGoogle} from "react-icons/bs"
import {BsInstagram} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
function Footer() {
  return (
    <footer className="bg-dark text-center text-white">
    {/* <!-- Grid container --> */}
    <div className="container p-4">
      {/* <!-- Section: Social media --> */}
      <section className="mb-4">
        {/* <!-- Facebook --> */}
        <a className="btn btn-outline-light btn-floating m-1 bg-white" href="#!" role="button">
        <BsFacebook/></a>
        {/* <!-- Twitter --> */}
        <a className="btn btn-outline-light btn-floating m-1 bg-white" href="#!" role="button">
          <BsTwitter/></a>
        {/* <!-- Google --> */}
        <a className="btn btn-outline-light btn-floating m-1 bg-white" href="#!" role="button">
          <BsGoogle/></a>
        {/* <!-- Instagram --> */}
        <a className="btn btn-outline-light btn-floating pb-2 bg-white" href="#!" role="button">
          <BsInstagram/></a>

        {/* <!-- Github --> */}
        <a className="btn btn-outline-light btn-floating m-1 bg-white" href="#!" role="button">
         <BsGithub/></a>
      </section>
      <section className="row">
        <div className="d-flex justify-content-center">
          <p className="pt-2">
            <strong>Register for free</strong>
          </p>
          <button type="submit" className="btn btn-outline-light mb-4 ms-3">
            SING UP!
          </button>
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
