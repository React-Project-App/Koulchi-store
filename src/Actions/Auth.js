import { auth, googleProvider  } from "../FirebaseConfig/FirebaseConfig"
import {onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth"
import { toast  } from 'react-toastify';
import { LOGIN,LOGOUT ,CHECK_LOGIN_USER,LOGIN_WITH_GOOGLE} from "../actionconstants/ActionCn";





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
export const LoginWithGoogle=()=>async(dispatch)=>{
    signInWithPopup(auth,googleProvider)
        .then((result)=>{         
            dispatch({type:LOGIN_WITH_GOOGLE,payload:result.user})
            toast.success(`Welcome ${result.user.displayName}`);
        })
        .catch((error)=>{
            toast.error(error);
        })
}