import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProduct } from '../../Actions/Poroducts';


import ProductsListe from '../../Components/ProductsListe';

const Products = () => {
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(GetAllProduct())
      }, [])
      const products= useSelector(state=>state.products)
  
 
 
  return products.length>0? (
    <div class="row d-flex justify-content-center w-100 mt-5 pt-2 mb-4 ps-4 ">
      {(
       products.map(product=>{

          return (
            <ProductsListe product={product} key={product.id}/>
          )
          
       })


    ) }
         </div>

  ):(
  <div className='d-flex justify-content-center align-items-center load'>
<div className='loader'></div>
    </div> )
}

export default Products
