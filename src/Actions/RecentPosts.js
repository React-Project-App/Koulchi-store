import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { RECENT_POST } from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";


export const RecentPost=()=>async (dispatch)=>{
    try {
      const q = query(collection(db, "Post"), orderBy("DatePost", "desc"), limit(3));
      const doc =await getDocs(q);
      // console.log(doc)
      dispatch({type:RECENT_POST,payload:doc});
    } catch (error) {
    }
  }