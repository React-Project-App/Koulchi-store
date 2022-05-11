import React from 'react'
import { useDispatch } from 'react-redux';
import { DicresAmount, IncresAmount, RemoveFromCart } from '../../Actions/Cart';

const CartItems = ({item}) => {
 const {Price,Amount,SubTotal,Title,id} =item
 
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

      <div   className='shadow'>
        
        <p> {Amount}</p>
        <p>{SubTotal}</p>
        <p>{Title}</p>
        <button 
        onClick={HandleRemoveFromCart}
        >
          remove
        </button>
        <button 
        onClick={HandleIncresAmount} 
        className=" ms-5 btn btn-outline-success"
        >+
        </button>
        <button 
        onClick={HandleDicresAmount}  
        className="ms-2 btn btn-outline-danger"
        >-
        </button>
        
      </div>
    )

  
}

export default CartItems
