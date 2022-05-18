import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { ResetPasswordd } from '../../Actions/Auth'
import { auth } from '../../FirebaseConfig/FirebaseConfig';


function ResetPassword() {
    const dispatch=useDispatch();
    const [email,setEmail]=useState("");
  return (
    <div className='container-fluid'>
    <main class="row">
        <section class="col-lg-6 col-12 sing p-5">
            <form class="p-5 d-flex flex-column align-content-center mt-5 ms-lg-5">
                <div class="mb-3 mt-5 text-center">
                    <h2 class="fw-bold">Forgot your password!</h2>
                </div>
                <div class="mb-5">
                    <label htmlFor="exampleInputEmail1" 
                    class="form-label"
                    >Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                     placeholder='aaaaa@gmail.com'
                     onChange={e=>{setEmail(e.currentTarget.value)}}
                    />
                    {/* <!-- <div id="emailHelp" class="form-text">TEST</div> --> */}
                </div>
                <button type="submit" 
                class="btn btn-primary mb-3"
                 onClick={()=>{dispatch(ResetPasswordd(email))}}
                >RESET PASSWORD</button>
                <Link to="/login" class="link">Back to sign in</Link>
            </form>
        </section>
        <section class="col-lg-6 col-12 sing-img d-none d-lg-flex p-5  flex-column ">
            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Logo%2FForgot%20password-rafiki.png?alt=media&token=47b1ff01-67cc-496a-af57-8eb8fdea63cf" 
            class="img-fluid w-75 mt-5 pt-5" alt=""/>
        </section>
    </main>
    </div>
    // { <div>
    // //   <input 
    // //   type="text" 
    // //   className='form-control' 
    // //   onChange={e=>{setEmail(e.currentTarget.value)}}
    // //   />
    // //   <button 
    // //   className='btn btn-primary mt-3' 
    // //   onClick={()=>{dispatch(ResetPasswordd(email))}}
    // //   >Reset</button>
    // // </div> }
  )
}

export default ResetPassword
