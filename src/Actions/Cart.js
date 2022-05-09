import { doc, getDoc } from "firebase/firestore";
import { ADD_TO_CART } from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";

export const AddTocart =(Id)=>async (dispatch)=>{
    const Product= await getDoc(doc(db,"Product",Id));

    

    dispatch({type:ADD_TO_CART,payload:Product});



}
