import React from 'react'
import { useDispatch } from 'react-redux';
import { DicresAmount, IncresAmount, RemoveFromCart } from '../../Actions/Cart';

const CartItems = ({item}) => {
 const { Curprice,Amount,SubTotal,Title,id,Photo} =item
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

      <section class="row item justify-content-lg-center pt-2 pb-2">
      <img class="item-img col-1 d-none d-lg-block d-md-block" src={Photo} alt={Title} />
      <div class="col-3 d-block d-lg-none d-md-none ms-4">
          <img class="item-img me-2" src={Photo} alt={Title}  />
          <p class="">Price :<span class="fw-bold">{Curprice}</span></p>
          <a  class="link pointer" onClick={HandleRemoveFromCart}>Remove</a>
      </div>
      <div class="col-3 item-dcp d-none d-lg-block d-md-block">
          <p class="">{Title}</p>
          <p>Price :<span class="fw-bold">{Curprice}</span></p>
          <a  class="link pointer"  onClick={HandleRemoveFromCart}>Remove</a>
      </div>
      <div class="col-7 item-cunt row justify-content-center">
          <button class="btn2 col-2" onClick={HandleDicresAmount}><a class="a" >-</a></button>
          <h3 class="item-inp col-1 text-center mt-1">{Amount}</h3>
          <button class="btn2" onClick={HandleIncresAmount}><a class="a col-2" >+</a></button>
          <span class="fw-bold text-dark col-1 price-cunt ps-5 col-4 text-end pt-1  fs-4" >{Amount*Curprice}</span>
      </div>
  </section>
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
