import {
  auth,
  googleProvider,
  facebookProvider,
  db,
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
import { doc, setDoc } from "firebase/firestore";


export const LoginWithmailAndPassword =
  (Email, Password) => async (dispatch) => {

    try {
      const user = await signInWithEmailAndPassword(auth, Email, Password);

      console.log(user);
      localStorage.setItem("user", JSON.stringify(user.user));
      await setDoc(doc(db,"User",user.user.uid),{
        uid:user.user.uid,
        name:user.user.displayName,
        email:user.user.email,
        Cart:localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[]
      })
      toast.success(`Welcome ${user.user.displayName}`);
        
      dispatch({ type: LOGIN, payload: user })
    //  setTimeout(()=>window.location.pathname="/home",2000) 

    } catch (error) {
      toast.error(error.message);
    }
  };
export const Logout = () => async (dispatch) => {
  try {
    signOut(auth);
    localStorage.clear();
    toast.success("Logout succefuly");

    setTimeout(()=>window.location.pathname="/home",7000) 


    dispatch({ type: LOGOUT });
  } catch (error) {}
};
export const CheckLogin_User = () => async (dispatch) => {
  try {
    onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
        dispatch({ type: CHECK_LOGIN_USER, payload: currentUser });

      }  
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




       setDoc(doc(db,"User",result.user.uid),{
        uid:result.user.uid,
        name:result.user.displayName,
        email:result.user.email,
        Cart:localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[]
      })
      toast.success(`Welcome ${result.user.displayName}`);

    //   setTimeout(()=>window.location.pathname="/home",7000) 




    })
    .catch((error) => {
      toast.error("Invalid Information");
    });
};

export const LoginWithFacebook = () => async (dispatch) => {
  try {
    const user = await signInWithPopup(auth, facebookProvider);
    localStorage.setItem("user", JSON.stringify(user.user));


    
    await setDoc(doc(db,"User",user.user.uid),{
        uid:user.user.uid,
        name:user.user.displayName,
        email:user.user.email,
        Cart:localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[]
      })
    dispatch({ type: LOGIN_WITH_FACEBOOK, payload: user });
    toast.success(`Welcome ${user.user.displayName}`);

    setTimeout(()=>window.location.pathname="/home",7000) 


  } catch (error) {
    toast.error("Invalid Information");
  }
};
export const CreateUserWithEmailAndPassword =(Email, Password,Name) => async (dispatch) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, Email, Password,Name);
          
    await setDoc(doc(db,"User",user.user.uid),{
        uid:user.user.uid,
        name:Name,
        email:user.user.email,
        Cart:localStorage.getItem("Cart")?JSON.parse(localStorage.getItem("Cart")):[]
      })
     await updateProfile(auth.currentUser, {
      //  email:Email,
      //  password:Password,
        displayName: Name,
        photoURL:"https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/ProfileImage%2Ficons8-male-user-60.png?alt=media&token=80a42db7-ed3b-4829-91ba-f45fc3ad4513"
      })

      dispatch({ type: CREAET_USER_ACOUNT, payload: user.user });
      toast.success(`Welcome ${Name}`);

      setTimeout(()=>window.location.pathname="/home",7000) 


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