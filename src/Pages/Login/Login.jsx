import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckLogin_User, LoginWithFacebook, LoginWithGoogle, LoginWithmailAndPassword,Logout } from '../../Actions/Auth'
// import { AiFillFacebook ,AiFillGoogleCircle} from "react-icons/ai";
import {BsGoogle,BsFacebook} from 'react-icons/bs'
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from 'react-router-dom';

const Login = () => {
    const dispatch =useDispatch()
    dispatch(CheckLogin_User())
    const state=useSelector(state=>state.Auth)

    useEffect(_=>{

    setUser(state)

    },[state])


const [Email,setEmail]=useState("")
const [Password,setPassword]=useState("")
    const handelEmailChnage = (e) => {
        setEmail(e.target.value)
    }
    const handelPasswordChnage = (e) => {
        setPassword(e.target.value);
    }
    const handelLogin = () => {
        // e.preventDefault();
        dispatch(LoginWithmailAndPassword(Email,Password))
    }

    const handelLogOut= () => {
      //e.preventDefault();
      dispatch(Logout())
  }
  const [user,setUser]=useState(null)
  
  const handelLogInWithGoogle= () => {
    //e.preventDefault();
    dispatch(LoginWithGoogle())
}

console.log(state)

  return (
    <div className='container'>
    <main class="  row">
        <section class="col-lg-6 col-12 sing p-5">
            <form class="p-5 d-flex flex-column align-content-center mt-5 ms-lg-5">
                <div class="mb-3 mt-5 text-center">
                    <h2 class="fw-bold">Hello!</h2>
                    <p>Sign in to your account</p>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" >Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" onChange={handelEmailChnage} name="Email" aria-describedby="emailHelp"/>
                </div>
                <div class="mb-1">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={handelPasswordChnage} name="Password"/>
                </div>
                <div class="d-flex justify-content-between">                   
                    <Link to="/ResetPassword" class="link text-decoration-underline">Reset password</Link>
                </div>
                <button type="button" class="btn btn-outline-info mb-2 mt-3"  onClick={handelLogin}>Sign in</button>
                <button type="button" class="btn btn-outline-danger mb-2 "  onClick={handelLogInWithGoogle}>Google<BsGoogle className='ms-2'/></button>
                <button type="button" class="btn btn-outline-primary mb-3 "  onClick={()=>dispatch(LoginWithFacebook())}>Facebook<BsFacebook className='ms-2'/></button>
                {/* {user&&(
                 <button type="button" className='btn btn-outline-warning ' onClick={handelLogOut}> LogOut</button>   
          )
          } */}
                <p>Dont'have an account?<Link to="/Signup" class="link ms-2 text-decoration-underline">Create Account</Link></p>
            </form>
        </section>
        <section class="col-lg-6 col-12 sing-img d-none d-lg-flex p-5  flex-column ">
            <h2 class=" mt-5 ms-5 ps-5 pt-5 fw-bold">Welcome Back!</h2>
            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2FMobile%20payments-pana%20(1).png?alt=media&token=68160e98-d4a4-4d35-bd55-e657d356e452" class="img-fluid w-75" alt=""/>
        </section>
    </main>
    </div>
    // <div className='container mt-5'>
    //     <div class="mb-3 " >
          
    //       <input type="text"class="form-control w-25" onChange={handelEmailChnage} name="Email"   id="" aria-describedby="helpId" placeholder="Email"/>
    //       <input type="text"class="form-control w-25" onChange={handelPasswordChnage}  name="Password" id="" aria-describedby="helpId" placeholder="password"/>
    //       <button  className=' pt btn btn-success '  onClick={handelLogin} > Login</button>
    //       <a    className=' pt text-decoration-none rounded-pill fs-1'  onClick={handelLogInWithGoogle} > <FcGoogle/></a>
    //       <a className=' pt text-decoration-none rounded-pill fs-1' onClick={()=>dispatch(LoginWithFacebook())} > <AiFillFacebook/></a>
          
          
    //       {user&&(
    //         <button  className='btn btn-danger ' onClick={handelLogOut}> LogOut</button>   
    //       )
    //       }
    //       <Link to={'/signup'}>Don't have an account ? SignUp</Link>
    //     </div>
    // </div>
  )
}

export default Login
