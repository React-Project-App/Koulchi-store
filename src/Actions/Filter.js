import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { FILTER_SEARCH } from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";






export const FilterSearch= (title)=>async (dispatch)=>{
    try {
        const qr =query(collection(db,"Product"),where("Title","==",title));

        const doc =await getDocs(qr);
        console.log(doc)
       
        if(doc.empty &&title){toast.warning("Product deos not exist")}
        dispatch({type:FILTER_SEARCH,payload:doc});
    } catch (error) {
        
    }
   
}