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
    <div className='container'>

    
    <main class="row">
        <section class="col-lg-6 col-12 sing-img d-none d-lg-flex p-5 flex-column align-content-center">
            <h2 class=" mt-5 text-center pt-5 fw-bold">Glad to see you!</h2>
            <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2FOnline%20shopping-cuate.png?alt=media&token=873a3ce6-f48a-4aa1-b004-62f2afd99748" class="img-fluid w-75 ms-5" alt=""/>
        </section>
        <section class="col-lg-6 col-12 sing p-5">
            <form class="p-5 d-flex flex-column ">
                <div class="mb-3 mt-5 text-center">
                    <h2 class="fw-bold">Hello,friend!</h2>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label" >Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handelNameChnage}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handelEmailChnage}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" onChange={handelPasswordChnage}/>
                </div>
                <button type="button" class="btn btn-primary mb-3">CREATE ACCOUNT</button>
                <p>Aleardy have an account?<Link class="link" to="/login"  onClick={handelLogin}>Sign in</Link></p>
            </form>
        </section>
    </main>
    </div>
    // <div className='container mt-5'>
    //     <div class="mb-3 " >
    //     <input type="text"class="form-control w-25" onChange={handelNameChnage} name="Name"   id="" aria-describedby="helpId" placeholder="Name"/>
          
    //       <input type="text"class="form-control w-25" onChange={handelEmailChnage} name="Email"   id="" aria-describedby="helpId" placeholder="Email"/>
    //       <input type="text"class="form-control w-25" onChange={handelPasswordChnage}  name="Password" id="" aria-describedby="helpId" placeholder="password"/>
    //       <button  className=' pt btn btn-success '  onClick={handelLogin} > SignUp</button>
    //       <Link to={'/login'}>Already have an account ? Login</Link>
         
    //     </div>
    // </div>
  )
}

export default SignUp
