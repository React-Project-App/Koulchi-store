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
  return (
    <>
        
          <Carousel/>
        {
          FeaturedProducts.map(product => {

            return <ProductsListe key={product.id} product={product} />
          })
      }
        
     
    </>
  )
}

export default Home
