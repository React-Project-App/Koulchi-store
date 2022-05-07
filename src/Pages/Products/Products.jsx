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
      console.log(products)
 
 
  return (
    <div className='container'>
      <div className="row">
      {(
       products.map(product=>{

          return <ProductsListe product={product} key={product.id}/>
       })


    ) }
      </div>
    
    </div>
  )
}

export default Products
