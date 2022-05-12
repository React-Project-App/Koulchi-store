import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckLogin_User, LoginWithFacebook, LoginWithGoogle, LoginWithmailAndPassword,Logout } from '../../Actions/Auth'
import { AiFillFacebook ,AiFillGoogleCircle} from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';


const Login = () => {
    const dispatch =useDispatch()


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
  dispatch(CheckLogin_User())
  const state=useSelector(state=>state.Auth)
  console.log(state)
  useEffect(_=>{
  setUser(state)
  },[state])
  const handelLogInWithGoogle= () => {
    //e.preventDefault();
    dispatch(LoginWithGoogle())
}

  return (
    <div className='container mt-5'>
        <div class="mb-3 " >
          
          <input type="text"class="form-control w-25" onChange={handelEmailChnage} name="Email"   id="" aria-describedby="helpId" placeholder="Email"/>
          <input type="text"class="form-control w-25" onChange={handelPasswordChnage}  name="Password" id="" aria-describedby="helpId" placeholder="password"/>
          <button  className=' pt btn btn-success '  onClick={handelLogin} > Login</button>
          <a    className=' pt text-decoration-none rounded-pill fs-1'  onClick={handelLogInWithGoogle} > <FcGoogle/></a>
          <a className=' pt text-decoration-none rounded-pill fs-1' onClick={()=>dispatch(LoginWithFacebook())} > <AiFillFacebook/></a>
          
          
          {user&&(
            <button  className='btn btn-danger ' onClick={handelLogOut}> LogOut</button>   
          )
          }
          <Link to={'/signup'}>Don't have an account ? SignUp</Link>
        </div>
    </div>
  )
}

export default Login
