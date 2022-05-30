import React from 'react'
import {SiGooglemaps} from 'react-icons/si'
import {BsTelephone} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'


function Information() {
  return (
    <div className="col-md-12 col-lg-6 col-sm-12">
            <div className="w-75">
          <h3 className="info-header ">GET IN TOUCH</h3>
          
          <p className="txt ">
            Morbi eu metus vel lorem porta convallis vitae nec turpis. Sed porta
            in nulla a condimentum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; Nullam molestie diam vel
            diam scelerisque malesuada sit amet ac tellus. Sed vulputate, lorem
            a hendrerit vestibulum, orci orci vestibulum risus.
          </p>
          </div>
          <div className="p-3 w-75 info" >
            <p><SiGooglemaps/> <span className="fw-bold text-dark"> Address :</span> 04, Techno Park, Agadir.</p>
            <p><FiMail/> <span className="fw-bold text-dark"> E-mail :</span> contactkoulchi@Koulchi.com</p>
            <p><BsTelephone/> <span className="fw-bold text-dark"> Phone :</span> +212 521 678 923</p>
          </div>
        </div>
  )
}

export default Information
