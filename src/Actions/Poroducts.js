import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { GET_ALL_PRODUCTS, GET_FEATURED_PRODUCTS } from "../actionconstants/ActionCn";
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
