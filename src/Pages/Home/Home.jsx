import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GetFeaturedProduct } from '../../Actions/Poroducts';
import ProductsListe from '../../Components/ProductsListe';

const Home = () => {

const dispatch =useDispatch();
    useEffect(() => {
      dispatch(GetFeaturedProduct())

    }, [])

    const FeaturedProducts = useSelector(state => state.products)
    console.log(FeaturedProducts)
  return (
    <div className='container'>
        <div className="row">
        {
          FeaturedProducts.map(product => {

            return <ProductsListe key={product.id} product={product} />
          })
      }
        </div>
     
    </div>
  )
}

export default Home
