import { doc, getDoc } from "firebase/firestore";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART ,INCRESAMOUNT, DICRESAMOUNT} from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";

export const AddTocart =(Id)=>async (dispatch)=>{
    const Product= await getDoc(doc(db,"Product",Id));
    dispatch({type:ADD_TO_CART,payload:Product});
}
export const RemoveFromCart =(id)=>async (dispatch)=>{
    console.log("ACtion",id)
    dispatch({type:REMOVE_FROM_CART,payload:id});
}
export const ClearCart =()=>async (dispatch)=>{
    dispatch({type:CLEAR_CART});
}
export const IncresAmount =(Id)=>async (dispatch)=>{
    dispatch({type:INCRESAMOUNT,payload:Id});
}
export const DicresAmount =(Id)=>async (dispatch)=>{
    dispatch({type:DICRESAMOUNT,payload:Id});
}