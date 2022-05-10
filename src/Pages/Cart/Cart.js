import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ClearCart } from '../../Actions/Cart'
import CartItems from '../../Components/CartItems/CartItems'

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
     console.log(CartProducts)
     const dispatch=useDispatch();
      const Clear=_=>{
          dispatch(ClearCart());
      }


     return CartProducts.length>0?
   (
    <div>{
        CartProducts.map(Item=>{

            return  <CartItems   key={Item.id} item={Item}    />
          
        })
        
        }
        <button onClick={Clear}>Clear Cart</button>
        <p>{Total}</p>
      <Link to={"/Products"}>Add More Product</Link>
    </div>
  ):<h1>Cart Empty</h1>
}

export default Cart
