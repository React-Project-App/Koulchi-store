import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CheckLogin_User, LoginWithmailAndPassword,Logout } from '../../Actions/Auth'

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
  return (
    <div>
        <div class="mb-3" >
          
          <input type="text"class="form-control" onChange={handelEmailChnage} name="Email"   id="" aria-describedby="helpId" placeholder="Email"/>
          <input type="text"class="form-control" onChange={handelPasswordChnage}  name="Password" id="" aria-describedby="helpId" placeholder="password"/>
          <button  className='btn btn-success '  onClick={handelLogin} > Login</button>
          {user&&(
            <button  className='btn btn-danger ' onClick={handelLogOut}> LogOut</button>   
          )

          }
        </div>
    </div>
  )
}

export default Login
