import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItems from '../../Components/CartItems/CartItems'

const Cart = () => {

     const CartProducts= useSelector(state=>state.Cart)
   
console.log(CartProducts)

     return CartProducts.length>0?
   (
    <div>{
        CartProducts.map(Item=>{

            return  <CartItems   key={Item.id} item={Item}   />
          
        })
        
        }
      <Link to={"/Products"}>Add More Product</Link>
    </div>
  ):<h1>Cart Empty</h1>
}

export default Cart
