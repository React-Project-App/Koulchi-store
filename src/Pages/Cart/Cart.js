import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ClearCart } from '../../Actions/Cart'
import CartItems from '../../Components/CartItems/CartItems'
import '../../CssFiles/CartStyle.css'
import Payement from '../../Components/Payement/Payement'
import Popup from '../../Components/Popup/Popup'
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
      const [isOpen, setIsOpen] = useState(false);
 

     return CartProducts.length>0?
   (
    <div className='items-list container-fluid'>
{/*    
  
          <div class="Header mt-5 pt-5">
        <h3 class="Heading lineSpan"><span className=''>K</span>oulchi Cart</h3>
        <h5 class="Action" onClick={Clear}>Remove all</h5>
        </div> */}
        <section class="row">
            <div class="col-4 text-center list-title">Product</div>
            <div class="col-4 text-center list-title ">Quantity</div>
            <div class="col-4 text-center list-title">Subtotal</div>
        </section> 
      {
        CartProducts.map(Item=>{

            return  <CartItems   key={Item.id} item={Item}    />
          
        })
        
        }
         <section class=" row justify-content-lg-center justify-content-md-center">
            <div class="col-7 d-none d-lg-block d-md-block"></div>
            <div class="row col-12 col-md-5 col-lg-5 cart-total">
                <button class="btn-total col-6 "><a class="a" onClick={Clear}>Remove All</a></button>
                <button class="btn-total col-6"> <Link class="a" to={"/store"}>Add More Product</Link></button>
                <div class="col-12 row pt-3">
                    <h4 class="col-6 text-center">Total :</h4>
                <p class="price-total col-6 text-center">{Total}</p>
                </div>
               <Popup Total={Total}/>
            </div>
        </section>
    </div>
  ):(
    <div className='container  d-flex align-items-center justify-content-center ' style={{height:'100vh'}}>
      <div className='row border py-5 shadow'>
      <div className=' text-center pb-3'>
        <h1 className='text-primary col-12'>Empty Cart</h1>
      </div>
      <div className='text-center'>
      <Link to="/store" className='btn btn-outline-primary '>Add Product</Link>
      
      </div>
      
      </div>

    </div>
  )
}

export default Cart
