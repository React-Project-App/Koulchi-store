import React from 'react'
import {BsFillCartFill,BsHeartFill,BsFillPersonFill} from 'react-icons/bs'


import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
    <div className="container">
        <Link to="/home"  className="navbar-brand bg-white fw-bold ms-4 logo pb-3" href="#">
            <span>K</span>OLCHI<span>.</span>
        </Link>
        <div className="ms-5 d-lg-none ms-auto ">
          <Link  to="/FavoriteProducts" className="me-3">
          <BsHeartFill/>

         </Link>
         <Link to="/cart" className="me-3 position-relative ">
           <BsFillCartFill/>

            <div className="spinner-grow crtp position-absolute" role="status">
                <span className="visually-hidden"></span> 
               </div>
         </Link>
         <Link to="/profile" className="me-3">
          <BsFillPersonFill/>
         </Link>
      </div>
      <button className="navbar-toggler shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link "  to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Store">Store</Link>
          </li>
         
        </ul>
        {/* <form className="search w-50 m-auto d-none d-lg-flex">
          <input className="form-control me-2 ipt border-0 shadow-none" type="search" placeholder="Search"
              aria-label="Search"/>
          <button className="btn btn-outline-success btr border-0 shadow-none" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                  className="bi bi-search" viewBox="0 0 16 16">
                  <path
                      d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
          </button>
      </form> */}
      </div>
      <div className="ms-5 d-lg-block d-none">
        <Link to="/FavoriteProducts" className="me-3">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
          </svg> */}
          <BsHeartFill/>

       </Link>
       <Link to="/Cart" className="me-3 position-relative ">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
          </svg> */}
          <BsFillCartFill/>

          <div className="spinner-grow crtp position-absolute" role="status">
              <span className="visually-hidden"></span> 
             </div>
       </Link>
       <Link to="/Profile" className="me-3">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg> */}
        <BsFillPersonFill/>

       </Link>
   </div>
    </div>
    {/* <form className="d-flex  search w-75 m-auto d-lg-none">
      <input className="form-control me-2 ipt border-0 shadow-none" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success btr border-0 shadow-none" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search"
              viewBox="0 0 16 16">
              <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
      </button>
  </form> */}
  </nav>
  )
}

export default Navbar
