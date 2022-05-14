import React from 'react'
import { useDispatch } from 'react-redux';
import { DicresAmount, IncresAmount, RemoveFromCart } from '../../Actions/Cart';

const CartItems = ({item}) => {
 const {Price,Amount,SubTotal,Title,id,Photo} =item
 
 const dispatch=useDispatch() ;

const  HandleRemoveFromCart=()=>{
  dispatch(RemoveFromCart(id))
}
const  HandleIncresAmount=()=>{
  console.log("dd")
  dispatch(IncresAmount(id))
}
const  HandleDicresAmount=()=>{
  dispatch(DicresAmount(id))

}
  
    return (

  <div class="Cart-Items my-4 row">
      <div class="image-box col-md-4 col-sm-12 d-flex justify-content-center">
      <img src={Photo} className="image-fluid rounded-4" style={{ height:"120px" }} />
      </div>
      <div class="about col-md-4 col-sm-12 d-flex justify-content-center">
      <h1 class="title ">{Title}</h1>
      {/* <h3 class="subtitle">250ml</h3> */}
      </div>
      <div class="counter col-md-4 d-flex justify-content-center col-sm-12">
        <div class="btn " onClick={HandleIncresAmount} >+</div>
        <div class="count px-4">{Amount}</div>
        <div class="btn" onClick={HandleDicresAmount}>-</div>
      </div>
      <div class="prices">
        <div class="amount">{SubTotal} DH</div>
        <div class="remove" onClick={HandleRemoveFromCart}><u>Remove</u></div>
      </div>
 </div>
        // {/* <p> </p>
        // <p>{SubTotal}</p>
        // <p></p> */}
        // {/* <button 
        // 
        // >
        //   remove
        // </button>
        // <button 
        // onClick={HandleIncresAmount} 
        // className=" ms-5 btn btn-outline-success"
        // >+
        // </button>
        // <button 
        // onClick={HandleDicresAmount}  
        // className="ms-2 btn btn-outline-danger"
        // >-
        // </button> */}
        
    )

  
}

export default CartItems
