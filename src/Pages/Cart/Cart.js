import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ClearCart } from '../../Actions/Cart'
import CartItems from '../../Components/CartItems/CartItems'
import '../../CssFiles/CartStyle.css'
const Cart = () => {
     const CartProducts= useSelector(state=>state.Cart)
     const [Total,setTotal]=useState(0);
  useEffect(() => {
    const  ProductTotal = CartProducts.reduce((Product, item) => {
       return Product + Number(item.SubTotal);
     },0);
     console.log(ProductTotal)
     setTotal(ProductTotal);
   }, [CartProducts]);
   
     const dispatch=useDispatch();
      const Clear=_=>{
          dispatch(ClearCart());
      }


     return CartProducts.length>0?
   (
    <div className=' container '>
   

     
          <div class="Header mt-5 pt-5">
        <h3 class="Heading">Shopping Cart</h3>
        <h5 class="Action" onClick={Clear}>Remove all</h5>
        </div>
      {
        CartProducts.map(Item=>{

            return  <CartItems   key={Item.id} item={Item}    />
          
        })
        
        }
        <hr/> 
          <div class="checkout ">
            <div class="total">
            <div>
            <div class="Subtotal">Sub-Total</div>
            <div class="items">{CartProducts.length} items</div>
          </div>
            <div class="total-amount">{Total}DH</div>
          </div>
            <Link to={"/store"} class="button ">Add More Product</Link>
          </div>
        {/* <button >Clear Cart</button> */}
        {/* <p>{Total}</p>
      <Link to={"/store"}>Add More Product</Link> */}
    </div>

  ):<h1>Cart Empty</h1>
}

export default Cart
