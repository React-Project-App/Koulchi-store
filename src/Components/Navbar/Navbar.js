import React, { useEffect, useState } from "react";
import { BsFillCartFill, BsHeartFill, BsFillPersonFill } from "react-icons/bs";
import "../../CssFiles/style.css";

import { Link } from "react-router-dom";
import { CheckLogin_User, Logout } from "../../Actions/Auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../FirebaseConfig/FirebaseConfig";
const Navbar = () => {
  const [ItemsNumber, setItemsNumber] = useState(0);

  const dispatch = useDispatch();
  dispatch(CheckLogin_User());
  const state = useSelector((state) => state.Auth);
  const CartItems = useSelector((state) => state.Cart);
  useEffect(() => {
    setItemsNumber(CartItems.length);
  }, [CartItems]);
  const handelLogOut = () => {
    dispatch(Logout());
  };
  const user = auth.currentUser;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white ">
      <div className="container">
        <Link
          to="/home"
          className="navbar-brand bg-white fw-bold ms-4 logo pb-3"
        >
          <span>K</span>OULCHI<span>.</span>
        </Link>
        <div className="ms-5  d-lg-none d-flex align-items-center ms-auto ">
          
          <Link to="/cart" className="me-1 position-relative ">
            <BsFillCartFill />
            <div className=" crtp position-absolute ">
              <span className=" NumberItems position-absolute">
                {ItemsNumber}
              </span>
            </div>
          </Link>

          <li className="nav-item dropdown vovo ">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {state ? (
              <img
                src={state.photoURL}
                className="rounded-pill  w-25"
                style={{width:"30px"}}
              />
            ) : (
              <BsFillPersonFill  />
            )}
          </a>
          <ul className="dropdown-menu vovo " aria-labelledby="navbarDropdown">
          {user ? (<>
                      <li>
                        <Link to="/profile" className="dropdown-item">
                          Your Profile
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li>
                        <a type="button" className="dropdown-item" onClick={handelLogOut}>
                          Log out
                        </a>
                      </li>
                      </>
                  ) : (
                      <li >
                        <Link to="/login" className="dropdown-item">
                          Log in
                        </Link>
                      </li>)}
           
          </ul>
        </li>

         
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
            <li className="nav-item">
              <Link className="nav-link " to="/Blog">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/AboutUs">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/Contact">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className=" d-lg-flex d-none align-items-center">
          <Link to="/Cart" className="me-4 position-relative  ">
            <BsFillCartFill />
            <div className=" crtp position-absolute ">
              <span className=" NumberItems position-absolute">
                {ItemsNumber}
              </span>
            </div>
          </Link>
          
          <li className="nav-item dropdown vovo me-5">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {state ? (
              <img
                src={state.photoURL}
                className="rounded-pill  "
                style={{width:"30px"}}
              />
            ) : (
              <BsFillPersonFill  />
            )}
          </a>
          <ul className="dropdown-menu vovo " aria-labelledby="navbarDropdown">
          {user ? (<>
                      <li  className="bg-white">
                        <Link to="/profile" className="">
                          Your Profile
                        </Link>
                      </li>
                      <li><hr className="dropdown-divider"/></li>
                      <li>
                        <a type="button" className="" onClick={handelLogOut}>
                          Log out
                        </a>
                      </li>
                      </>
                  ) : (
                      <li >
                        <Link to="/login" className="">
                          Log in
                        </Link>
                      </li>)}
           
          </ul>
        </li>

        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
