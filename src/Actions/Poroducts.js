import { async } from "@firebase/util";
import { arrayUnion, collection, doc, getDoc, getDocs, onSnapshot, query, updateDoc, where } from "firebase/firestore";
import { toast } from "react-toastify";
import { AMOUNT_PRODUCT, GET_ALL_PRODUCTS, GET_DETAILS_PRODUCT, GET_FEATURED_PRODUCTS, INCRES_AMOUNT, RATE_PRODUCT } from "../actionconstants/ActionCn";
import { auth, db } from "../FirebaseConfig/FirebaseConfig";


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
export const ProductRating = (id,rate) => async (dispatch) => {

    
    console.log("id", id, "rate", rate)
    let NewRating
    const  ref = doc(db, "Product", id);
    const Product = await getDoc(ref);
    const {Rating}  =Product.data()
    const {FivaRate,
      FourRate,
      OneRate,
      ThreeRate,
      TwoRate}=Rating
         console.log(Rating)
  if(rate===1){ 
    
    NewRating= Number( OneRate+1)


    const up= await updateDoc(ref, {
      "Rating.OneRate":NewRating,
    });
  
  
  }
  if(rate===2){
    NewRating= Number( TwoRate+1)
    const up= await updateDoc(ref, {
      "Rating.TwoRate" :NewRating,
    });
  
  
  
  }
  if(rate===3){
    
    NewRating= Number( ThreeRate+1)
    const up= await updateDoc(ref, {
      "Rating.ThreeRate"  :NewRating,
    });
  
  }
  if(rate===4){
    
    NewRating= Number( FourRate+1)
    const up= await updateDoc(ref, {
     
        "Rating.FourRate" :NewRating,
    });
  
  }
  if(rate===5){
    console.log(FivaRate)
    NewRating= Number( FivaRate+1)
    const up= await updateDoc(ref, {
      "Rating.FivaRate":NewRating,
      
    });
  
  }
    
  console.log(NewRating)
  

    // const up= await updateDoc(ref, {
    //   Reviews: rate,
    //   Usersrate:arrayUnion(auth.currentUser.uid)
    // });
    let Reviews =   Number(5*FivaRate+4*FourRate+3*ThreeRate+2*TwoRate+1*OneRate) /Number(FivaRate+FourRate+ThreeRate+TwoRate+OneRate)
  console.log(Reviews)
    console.log( Math.round( Reviews))
      const up= await updateDoc(ref, {
      Reviews: Math.round( Reviews),
      Usersrate:arrayUnion(auth.currentUser.uid)
    });
    dispatch({ type: RATE_PRODUCT});
    toast.success("Thank you for your review  😉 😉😉");

}

