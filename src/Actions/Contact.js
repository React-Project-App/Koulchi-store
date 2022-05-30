import { async } from "@firebase/util";
import { addDoc, arrayUnion, collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { SENTMESSAGE } from "../actionconstants/ActionCn";
import { auth, db } from "../FirebaseConfig/FirebaseConfig";


export const SentMessage=(msg,email)=>async (dispatch)=>{
    try {

        const docRef = doc(db, "Contact", email);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await updateDoc(doc(db,"Contact",email), {
                Message: arrayUnion(msg.Message)
            });
          }
          else{
            await setDoc(doc(db,"Contact",email),msg)
            console.log(email);
            dispatch({type:SENTMESSAGE})
          }
        

    

    
        toast.success("Message sent");
    } catch (error) {
        // console.log(error)
        toast.success("Message has not been sent");
    }
}