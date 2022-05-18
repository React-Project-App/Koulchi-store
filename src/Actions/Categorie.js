import { collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { CATEGORIE, FILTER_CATEGORIE } from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";



export const GetCategories=()=>async (dispatch)=>{
    onSnapshot(collection(db,"Categories"),(cat)=>{
        dispatch({type:CATEGORIE,payload:cat});
    })
}

