import { auth  } from "../FirebaseConfig/FirebaseConfig"
import {signInWithEmailAndPassword} from "firebase/auth"

import { toast  } from 'react-toastify';
import { LOGIN } from "../actionconstants/ActionCn";




export const LoginWithmailAndPassword = (Email,Password) => async (dispatch) => {

    try {
        
        const user = await signInWithEmailAndPassword(auth,Email, Password)
        dispatch({ type: LOGIN, payload: user })
        toast.success("Login Successful")
    } catch (error) {
            toast.error(error.message)
    }
    
}
