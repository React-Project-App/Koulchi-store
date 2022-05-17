import React from "react";
import { BsFillCartFill, BsHeartFill, BsFillPersonFill } from "react-icons/bs";
import "../../CssFiles/style.css";

import { Link } from "react-router-dom";
import { CheckLogin_User, Logout } from "../../Actions/Auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../FirebaseConfig/FirebaseConfig";
const Navbar = () => {
  
  const dispatch =useDispatch()
  dispatch(CheckLogin_User())
  const state=useSelector(state=>state.Auth)
  const handelLogOut= () => {
    //e.preventDefault();
    dispatch(Logout())
}
 const user=auth.currentUser
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <Link
          to="/home"
          className="navbar-brand bg-white fw-bold ms-4 logo pb-3"
          href="#"
        >
          <span>K</span>OULCHI<span>.</span>
        </Link>
        <div className="ms-5 d-lg-none ms-auto ">
          <Link to="/FavoriteProducts" className="me-3">
            <BsHeartFill />
          </Link>
          <Link to="/cart" className="me-3 position-relative ">
            <BsFillCartFill />

            <div className="spinner-grow crtp position-absolute" role="status">
              <span className="visually-hidden"></span>
            </div>
          </Link>
        
          {/* <Link to="/Profile">

          {
              state? <img src={state.photoURL} className="rounded-pill w-25 "/>:<BsFillPersonFill/>


          }
          </Link> */}
          <a class="" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
{state? <img src={state.photoURL} className="rounded-pill w-25 "/>:<BsFillPersonFill />}

 </a>

  <div class="row text-start mt-1" style={{position:'absolute',right:'calc(10%)'}}>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body ">
      {user?(
                  <ul className="ps-0"  style={{listStyle:"none"}}>
                                <li>
            <Link to="/profile" className="log">Your Profile</Link>               
          </li>
          <hr/>
                 <li> <a type="button" className='log' onClick={handelLogOut}> Log out</a>   </li></ul>
          ):(
            <ul className="ps-0"  style={{listStyle:"none"}}>

          <li><Link to="/login" className="log" >Log in</Link> </li>
          </ul>
          ) 
          }          
      </div>
    </div>
  </div>
  </div>
        </div>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ps-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Store">
                Store
              </Link>
            </li>
          </ul>
        </div>
        <div className="ms-5 d-lg-block d-none">
          {/* <Link to="/FavoriteProducts" className="me-3">
            <BsHeartFill />
          </Link> */}
          <Link to="/Cart" className="me-3 position-relative ">
            <BsFillCartFill />

            <div className="spinner-grow crtp position-absolute" role="status">
              <span className="visually-hidden"></span>
            </div>
          </Link>
          {/* <Link to="/Profile">
          {
              state? <img src={state.photoURL} className="rounded-pill w-25 "/>:<BsFillPersonFill/>


          }
          </Link> */}
            
  {/* <Link to="" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
  {
              state? <img src={state.photoURL} className="rounded-pill w-25 "/>:<BsFillPersonFill/>
          }
  </Link> */}
 <a class="position-fixed" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
{state? <img src={state.photoURL} className="rounded-pill  " width="33%"/>:<BsFillPersonFill/>}

 </a>

  <div class="row text-start mt-1 position-fixed" style={{position:'absolute',right:'calc(12%)',top:'calc(5%)'}}>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body ">
         
          
           
              {/* <Link to="/login" className="log" >Log out</Link>     */}
              {user?(
                  <ul className="ps-0"  style={{listStyle:"none"}}>
                                <li>
            <Link to="/profile" className="log">Your Profile</Link>               
          </li>
          <hr/>
                 <li> <a type="button" className='log' onClick={handelLogOut}> Log out</a>   </li></ul>
          ):(
            <ul className="ps-0"  style={{listStyle:"none"}}>

          <li><Link to="/login" className="log" >Log in</Link> </li>
          </ul>
          ) 
          }           
            

          
      </div>
    </div>
  </div>
  </div>
          {/* <Link to="/Profile" className="me-3">
            
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
