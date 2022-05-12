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
    <main class="row d-flex justify-content-center ps-5 pe-5">
      {(
       products.map(product=>{

          return (
            <ProductsListe product={product} key={product.id}/>
          )
          
       })


    ) }
         </main>

  ):<h1>Loading</h1>
}

export default Products
