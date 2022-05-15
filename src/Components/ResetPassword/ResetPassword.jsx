import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ResetPasswordd } from '../../Actions/Auth'
import { auth } from '../../FirebaseConfig/FirebaseConfig';


function ResetPassword() {
    const dispatch=useDispatch();
    const [email,setEmail]=useState("");
  return (
    <div>
      <input 
      type="text" 
      className='form-control' 
      onChange={e=>{setEmail(e.currentTarget.value)}}
      />
      <button 
      className='btn btn-primary mt-3' 
      onClick={()=>{dispatch(ResetPasswordd(email))}}
      >Reset</button>
    </div>
  )
}

export default ResetPassword
