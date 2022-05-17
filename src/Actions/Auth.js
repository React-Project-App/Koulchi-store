import {
  auth,
  googleProvider,
  facebookProvider,
} from "../FirebaseConfig/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";

import {
  LOGIN,
  LOGOUT,
  CHECK_LOGIN_USER,
  LOGIN_WITH_GOOGLE,
  LOGIN_WITH_FACEBOOK,
  CREAET_USER_ACOUNT,
  RESET_PASSWORD,
} from "../actionconstants/ActionCn";


export const LoginWithmailAndPassword =
  (Email, Password) => async (dispatch) => {

    try {
      const user = await signInWithEmailAndPassword(auth, Email, Password);
      localStorage.setItem("user", JSON.stringify(user.user));

      dispatch({ type: LOGIN, payload: user });
      window.location.pathname="/home"

      toast.success(`Welcome ${user.user.displayName}`);


    } catch (error) {
      toast.error(error.message);
    }
  };
export const Logout = () => async (dispatch) => {
  try {
    signOut(auth);
    localStorage.clear();
    dispatch({ type: LOGOUT });

    window.location.pathname="/home"

  
    toast.success("Logout succefuly");
  } catch (error) {}
};
export const CheckLogin_User = () => async (dispatch) => {
  try {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch({ type: CHECK_LOGIN_USER, payload: currentUser });
    });
  } catch (error) {
    toast.error("Invalid Information");
  }
};
export const LoginWithGoogle = () =>  (dispatch) => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      dispatch({ type: LOGIN_WITH_GOOGLE, payload: result.user });
      localStorage.setItem("user", JSON.stringify(result.user));
      window.location.pathname="/home"

      toast.success(`Welcome ${result.user.displayName}`);


    })
    .catch((error) => {
      toast.error("Invalid Information");
    });
};

export const LoginWithFacebook = () => async (dispatch) => {
  try {
    const user = await signInWithPopup(auth, facebookProvider);
    dispatch({ type: LOGIN_WITH_FACEBOOK, payload: user });
    window.location.pathname="/home"

    toast.success(`Welcome ${user.user.displayName}`);
  } catch (error) {
    toast.error("Invalid Information");
  }
};
export const CreateUserWithEmailAndPassword =(Email, Password,Name) => async (dispatch) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, Email, Password,Name);

     await updateProfile(auth.currentUser, {
      //  email:Email,
      //  password:Password,
        displayName: Name,
        photoURL:"https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/ProfileImage%2Ficons8-male-user-60.png?alt=media&token=80a42db7-ed3b-4829-91ba-f45fc3ad4513"
      })

      dispatch({ type: CREAET_USER_ACOUNT, payload: user.user });
      window.location.pathname="/home"

      toast.success(`Welcome ${Name}`);
    } catch {
      toast.error("Invalid Information");
    }
  };
export const ResetPasswordd=(email)=>async(dispatch)=>{
  try {
  await sendPasswordResetEmail(auth,email)
    dispatch({type:RESET_PASSWORD})
    toast.success("Password Has been Changed");
  } catch (error) {
    toast.error(error);
  }
}