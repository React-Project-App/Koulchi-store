import { collection, doc, getDocs, limit, onSnapshot, orderBy, query, where } from "firebase/firestore";
import { GET_ALL_POSTS, GET_POST, RECENT_POST, SEARCH_POST } from "../actionconstants/ActionCn";
import { db } from "../FirebaseConfig/FirebaseConfig";

export const GetAllPosts = () => async (dispatch) => {
  const ref = collection(db, "Post");
  onSnapshot(ref, (post) => {
    dispatch({ type: GET_ALL_POSTS, payload: post });
  });
};

export const GetPost = (id) => async (dispatch) => {
  const ref = doc(db, "Post", id);
  onSnapshot(ref, (post) => {
    dispatch({ type: GET_POST, payload: post });
  });
};

export const SearchPost=(titre)=>async (dispatch)=>{
  try {

  const qr=query(collection(db, "Post"),where("Title","==",titre))
  const doc =await getDocs(qr);
  // console.log(doc)
  dispatch({type:SEARCH_POST,payload:doc});
  
  } catch (error) {
      
  }
}

