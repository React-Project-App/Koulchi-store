import { collection, getDocs, query, where } from "firebase/firestore";
import { FILTER_CATEGORIE } from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";




export const FilterCategorie=(cat)=>async (dispatch)=>{
    try {
    const qr=query(collection(db,"Product"),where("Categorie","==",cat))
    const doc =await getDocs(qr);
    dispatch({type:FILTER_CATEGORIE,payload:doc});
    } catch (error) {
        
    }
}