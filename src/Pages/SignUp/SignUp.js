import React ,{useState}from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { CreateUserWithEmailAndPassword } from '../../Actions/Auth'

const SignUp = () => {
    const dispatch =useDispatch()

    const [Email,setEmail]=useState("")
const [Password,setPassword]=useState("")
const [Name,setName]=useState("")


const handelEmailChnage = (e) => {
    setEmail(e.target.value)
}
const handelPasswordChnage = (e) => {
    setPassword(e.target.value);
}
const handelNameChnage = (e) => {
    setName(e.target.value);
}
const handelLogin = () => {
    // e.preventDefault();
    dispatch(CreateUserWithEmailAndPassword(Email,Password,Name))
}
  return (
    <div className='container mt-5'>
        <div class="mb-3 " >
        <input type="text"class="form-control w-25" onChange={handelNameChnage} name="Name"   id="" aria-describedby="helpId" placeholder="Name"/>
          
          <input type="text"class="form-control w-25" onChange={handelEmailChnage} name="Email"   id="" aria-describedby="helpId" placeholder="Email"/>
          <input type="text"class="form-control w-25" onChange={handelPasswordChnage}  name="Password" id="" aria-describedby="helpId" placeholder="password"/>
          <button  className=' pt btn btn-success '  onClick={handelLogin} > SignUp</button>
          <Link to={'/login'}>Already have an account ? Login</Link>
         
        </div>
    </div>
  )
}

export default SignUp
