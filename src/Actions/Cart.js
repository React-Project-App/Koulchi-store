

import { doc, getDoc } from "firebase/firestore";
import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART ,INCRESAMOUNT, DICRESAMOUNT} from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";

export const AddTocart =(Id,Amount)=>async (dispatch)=>{
    const Product= await getDoc(doc(db,"Product",Id));
       const { id } = Product;
       const {  Title,  Photo , Prevprice,Curprice} =Product.data()

       const product ={ Title,  Prevprice,Curprice, Photo ,id,Amount,SubTotal: Curprice} 
    

    dispatch({type:ADD_TO_CART,payload:product});
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
