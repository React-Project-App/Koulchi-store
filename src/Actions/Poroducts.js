import { async } from "@firebase/util";
import { collection, doc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { AMOUNT_PRODUCT, GET_ALL_PRODUCTS, GET_DETAILS_PRODUCT, GET_FEATURED_PRODUCTS, INCRES_AMOUNT } from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";


export const GetAllProduct= ()=>async (dispatch)=>{

onSnapshot(collection(db,"Product"),(snapshot)=>{

    dispatch({type:GET_ALL_PRODUCTS,pyload:snapshot});
})

}


export const GetFeaturedProduct= ()=>async (dispatch)=>{

    const qr =query (collection(db,"Product"),where("Featured","==",true));

    const doc =await getDocs(qr);
    dispatch({type:GET_FEATURED_PRODUCTS,pyload:doc});
}


export const GETDETAILSPRODUCT=(id)=>async(dispatch)=>{
    const ref=doc(db,'Product',id)
onSnapshot(ref,(prod)=>{
  dispatch({type:GET_DETAILS_PRODUCT,pyload:prod});
})
}

export const AMOUNTPRODUCT=(id)=>async(dispatch)=>{
    const ref=doc(db,'Product',id)
    onSnapshot(ref,(prod)=>{
      dispatch({type:AMOUNT_PRODUCT,pyload:prod});
    })
}

