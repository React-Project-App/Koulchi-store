import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { LoginWithmailAndPassword } from '../../Actions/Auth'

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
    const handelLogin = (e) => {
        e.preventDefault();
        dispatch(LoginWithmailAndPassword(Email,Password))
        



    }
  return (
    <div>
        <form onSubmit={handelLogin} class="mb-3" >
          
          <input type="text"class="form-control" onChange={handelEmailChnage} name="Email"   id="" aria-describedby="helpId" placeholder="Email"/>
          <input type="text"class="form-control" onChange={handelPasswordChnage}  name="Password" id="" aria-describedby="helpId" placeholder="password"/>
          <button  className='btn btn-dark '  > Login</button>
        </form>
      
    </div>
  )
}

export default Login
