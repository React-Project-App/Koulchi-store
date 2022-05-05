import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../FirebaseConfig/FirebaseConfig";


export const GetAllProduct= ()=>async (dispatch)=>{

onSnapshot(collection(db,"Product"),(snapshot)=>{

    dispatch({type:"GET_ALL_PRODUCTS",pyload:snapshot});


})

}
