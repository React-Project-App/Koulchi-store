import { async } from "@firebase/util";
import { addDoc, collection, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { SENTMESSAGE } from "../actionconstants/ActionCn";
import { auth, db } from "../FirebaseConfig/FirebaseConfig";


export const SentMessage=(msg)=>async (dispatch)=>{
    try {
    await addDoc(collection(db,"Contact"),msg)
    // console.log(msg);
    dispatch({type:SENTMESSAGE})
        toast.success("Message sent");
    } catch (error) {
        // console.log(error)
        toast.success("Message has not been sent");
    }
}