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
  const user = useSelector((state) => state.Auth);
  const  [LogedUser,setLogedUser]=useState(null)

  const [Name,setName]=useState('')
  const localUser= JSON.parse( localStorage.getItem('User'))
  const navigate = useNavigate();
  const [image,setImage]=useState('')
  const changeUserInfo= async()=>{
    try {
         const user = await updateProfile(auth.currentUser,{
            displayName :Name,
          })
          toast.success("Information has been updated successfully")
    } catch (error) {
      
    }

  }

  return  (
      <div className='container content'>{user?(    <main class="row">
      <section class="col-lg-6 col-12 sing p-5">
          <form class="p-5 d-flex flex-column align-content-center ms-lg-5">
              <div class="mb-3 mt-5 text-center row">
                  <img src={user.photoURL } class="pro col-4 rounded-circle" alt="" />
                  <h3 class="fw-bold col-8 user-name text-uppercase ">{user.displayName}</h3>
              </div>
              <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fw-bold">Name</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=> setName(e.target.value)}/>
                 
              </div>
              
              <div className='mb-3'>
              <button type="button" class="btn btn-primary mb-3"  onClick={()=>navigate("/ResetPassword")}>Change Password</button>
  
              </div>
             
              <button type="button" class="btn btn-primary mb-3" onClick={()=>changeUserInfo()} >SAVE CHANGES</button>
          </form>
      </section>
      <section class="col-lg-6 col-12 sing-img d-none d-lg-flex p-5  flex-column ">
          <img src="https://raw.githubusercontent.com/rachid-wanmid/DESIGN_ECO_POJ/main/page%20img/Accept%20request-pana.png" class="img-fluid w-75 mt-5 pt-5 " alt=""/>
      </section>
  </main> ):(<div className='d-flex justify-content-center align-items-center load'>
<div className='loader'></div>
    </div>) }</div>
   

  )
}

export default Profile
