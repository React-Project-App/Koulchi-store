import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { CheckLogin_User } from '../../Actions/Auth';
import ResetPassword from '../../Components/ResetPassword/ResetPassword'
// import { auth } from '../../FirebaseConfig/FirebaseConfig'

function Profile() {
  const dispatch=useDispatch();
  dispatch(CheckLogin_User())
  const user=useSelector(state=>state.Auth)
  const {displayName,photoURL}=user;

  return (
    <div className='container pt-5 mt-5'>
      <div className='row pt-5 mt-5'>
        <div className=' row '>
          <div className='col-12'>
          <h2 >{displayName}</h2>
         <img src={photoURL} alt={displayName}  className=" rounded-circle "style={{width:'100px'}}/>
          </div>
         <div className='col-12'>
         <button className='btn btn-primary col-3'>Update</button>
         </div>
        </div>
      
      <div className='col-6  border py-3 my-4'>
        <h3 className='text-primary'>Reset Your Password</h3>
      <ResetPassword/>
      </div>
      </div>
     </div>
  )
}

export default Profile
