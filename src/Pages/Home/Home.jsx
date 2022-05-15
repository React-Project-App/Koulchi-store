import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetFeaturedProduct } from '../../Actions/Poroducts';
import Carousel from '../../Components/carousel/Carousel';

import ProductsListe from '../../Components/ProductsListe';

const Home = () => {

const dispatch =useDispatch();
    useEffect(() => {
      dispatch(GetFeaturedProduct())

    }, [])

    const FeaturedProducts = useSelector(state => state.products)
    if (FeaturedProducts.length>0) {
      return (
        <>
            
              <Carousel/>
              <div className='container'>
              <div className=' row'>
    
            {
              FeaturedProducts.map(product => {
    
                return <ProductsListe key={product.id} product={product} />
              })
          }
              </div>
              </div>
            
         
        </>
        
      )
    }
    return <div className='d-flex justify-content-center align-items-center load'>
<div className='loader'></div>
    </div> 
  
}

export default Home
