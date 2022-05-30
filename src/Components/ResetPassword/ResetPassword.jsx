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
    <main className="row">
        <section className="col-lg-6 col-12 sing p-5">
            <form className="p-5 d-flex flex-column align-content-center mt-5 ms-lg-5">
                <div className="mb-3 mt-5 text-center">
                    <h2 className="fw-bold">Forgot your password!</h2>
                </div>
                <div className="mb-5">
                    <label htmlFor="exampleInputEmail1" 
                    className="form-label"
                    >Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                     placeholder='aaaaa@gmail.com'
                     onChange={e=>{setEmail(e.currentTarget.value)}}
                    />
                    {/* <!-- <div id="emailHelp" class="form-text">TEST</div> --> */}
                </div>
                <button type="submit" 
                className="btn btn-primary mb-3"
                 onClick={()=>{dispatch(ResetPasswordd(email))}}
                >RESET PASSWORD</button>
                <Link to="/login" className="link">Back to sign in</Link>
            </form>
        </section>
        <section className="col-lg-6 col-12 sing-img d-none d-lg-flex p-5  flex-column ">
            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Logo%2FForgot%20password-rafiki.png?alt=media&token=47b1ff01-67cc-496a-af57-8eb8fdea63cf" 
            className="img-fluid w-75 mt-5 pt-5" alt=""/>
        </section>
    </main>
    </div>
  
  )
}

export default ResetPassword
