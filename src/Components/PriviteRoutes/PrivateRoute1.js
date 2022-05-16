import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { CheckLogin_User } from '../../Actions/Auth'



const PrivateRoute1 = ({children}) => {

    const dispatch = useDispatch()
    dispatch(CheckLogin_User())
  const state=useSelector(state=>state.Auth)
    console.log(state)
  return  state ? <Navigate to="/home"/>:<output/>
}

export default PrivateRoute1
