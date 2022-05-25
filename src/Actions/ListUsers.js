
import { collection, onSnapshot } from "firebase/firestore";
import { LIST_USERS } from "../actionconstants/ActionCn";


import { db } from "../FirebaseConfig/FirebaseConfig";



export const GetAllUsers= ()=>async (dispatch)=>{

    onSnapshot(collection(db,"User"),(snapshot)=>{
    
        dispatch({type:LIST_USERS,payload:snapshot});
    })
}

    