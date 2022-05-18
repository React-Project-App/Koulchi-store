import { updateProfile } from 'firebase/auth';
import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CheckLogin_User } from '../../Actions/Auth';
import ResetPassword from '../../Components/ResetPassword/ResetPassword'
import { auth } from '../../FirebaseConfig/FirebaseConfig';
// import { auth } from '../../FirebaseConfig/FirebaseConfig'
// import FileBase64 from 'react-file-base64';

function Profile() {
  const dispatch=useDispatch();
  dispatch(CheckLogin_User())
  const  [LogedUser,setLogedUser]=useState(null)

  const [Name,setName]=useState('')
  const [Phone,setPhone]=useState(0)
  const localUser= JSON.parse( localStorage.getItem('user'))
  
 
  const navigate = useNavigate();

  const [image,setImage]=useState('')
  
  const changeUserInfo= async()=>{
    try {
         const user = await updateProfile(auth.currentUser,{
            displayName :Name,
            providerData: [{phoneNumber: Phone} ]
            
          })
          console.log(user)


          toast.success("Information has been updated successfully")
    } catch (error) {
      
    }

  }

  return (
    // <div className='container pt-5 mt-5'>
    //   <div className='row pt-5 mt-5'> 
    //     <div className=' row '>
    //       <div className='col-12'>
    //       <h2 >{displayName}</h2>
    //      {/* <img src={photoURL} alt={displayName}  className=" rounded-circle "style={{width:'100px'}}/> */}
    //       </div>
    //      <div className='col-12'>
    //      <button className='btn btn-primary col-3'>Update</button>
    //      </div>
    //     </div>
      
    //   <div className='col-6  border py-3 my-4'>
    //     <h3 className='text-primary'>Reset Your Password</h3>
    //   {/* <ResetPassword/> */}
    //   </div>
    //   </div>
    //  </div>
   

    <main class="row">
    <section class="col-lg-6 col-12 sing p-5">
        <form class="p-5 d-flex flex-column align-content-center ms-lg-5">
            <div class="mb-3 mt-5 text-center row">
                <img src={image } class="pro col-4" alt="" />
                <h3 class="fw-bold col-8 user-name text-uppercase ">{localUser.displayName}</h3>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label fw-bold">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=> setName(e.target.value)}/>
               
            </div>
            {/* <div class="mb-3"> */}
                {/* <label for="exampleInputEmail1" class="form-label  fw-bold">Phone</label> */}
                {/* <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=> HandelFile(e.target.files[0 ])} /> */}
          
            {/* </div> */}
            <div className='mb-3'>
            <button type="button" class="btn btn-primary mb-3"  onClick={()=>navigate("/ResetPassword")}>Change Password</button>

            </div>
            {/* <div class="d-flex justify-content-between mb-3">
                <a href="forgot password.html" class="link ">Don't Know Your Password ?</a>
            </div> */}
            {/* <div class="mb-4">
                <label for="exampleInputEmail1" class="form-label">New Password</label>
                <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              
            </div> */}
            <button type="button" class="btn btn-primary mb-3" onClick={()=>changeUserInfo()} >SAVE CHANGES</button>
        </form>
    </section>
    <section class="col-lg-6 col-12 sing-img d-none d-lg-flex p-5  flex-column ">
        <img src="https://raw.githubusercontent.com/rachid-wanmid/DESIGN_ECO_POJ/main/page%20img/Accept%20request-pana.png" class="img-fluid w-75 mt-5 pt-5" alt=""/>
    </section>
</main>
  )
}

export default Profile
