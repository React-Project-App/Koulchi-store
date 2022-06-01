import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { CheckLogin_User } from '../../Actions/Auth'



const PrivateRoute1 = () => {
  const dispatch = useDispatch()

    useEffect(() => {
      dispatch(CheckLogin_User())

    }, [])
  const state=useSelector(state=>state.Auth)
    console.log(state)
  return  state?<output/> : <Navigate to="/home"/>
}

export default PrivateRoute1
