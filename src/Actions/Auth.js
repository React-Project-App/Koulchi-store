import { auth  } from "../FirebaseConfig/FirebaseConfig"
import {onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"

import { toast  } from 'react-toastify';
import { LOGIN,LOGOUT ,CHECK_LOGIN_USER} from "../actionconstants/ActionCn";





export const LoginWithmailAndPassword = (Email,Password) => async (dispatch) => {

    try {
        
        const user = await signInWithEmailAndPassword(auth,Email, Password)
        dispatch({ type: LOGIN, payload: user })
        toast.success("Login Successful")
    } catch (error) {
            toast.error(error.message)
    }
    
}
export const Logout=()=>async(dispatch)=>{
        try {
            signOut(auth);
            //console.log(msg);
          
                
            dispatch({ type: LOGOUT})
                    
            toast.success("Logout succefuly");
        } catch (error) {
        }
}
export const CheckLogin_User=()=>async(dispatch)=>{
    try {
       
        onAuthStateChanged(auth,(currentUser)=>{
        dispatch({ type: CHECK_LOGIN_USER,payload:currentUser})
            
        })
            
    } catch (error) {
        toast.error("ddd");
        
    }
}