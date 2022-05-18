import { AnimatePresence } from 'framer-motion';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProduct } from '../../Actions/Poroducts';


import ProductsListe from '../../Components/ProductsListe';
import SideBar from '../../Components/SideBar/SideBar';

const Products = () => {
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(GetAllProduct())
      }, [])
      const Products= useSelector(state=>state.products)
      const FilterdProducts= useSelector(state=>state.Filter)
      const FilterCategorie=useSelector(state=>state.FilterCategorie)
      // console.log(FilterCategorie)
      let prod=Products
      if (FilterdProducts.length>0) {
         prod=FilterdProducts
      }
       if (FilterCategorie.length>0) {
         prod=FilterCategorie
         
      }
  return Products.length>0? (
    <div className='container-fluid'>

    <div className='row mt-5 pt-5'>
   
        <SideBar  />
    <div className='row d-flex justify-content-center  col-12 mt-3'>

    
    
    {/* <div class="row d-flex justify-content-center w-100 mt-5 pt-2 mb-4 ps-4 pt-5 "> */}
      {/* <AnimatePresence> */}

     
      {(
        
         prod.map(product=>{

          return (
            <ProductsListe product={product} key={product.id}/>
          )
          
       })


    ) }
     {/* </AnimatePresence> */}
         {/* </div> */}
    </div>
         </div>
         </div>

  ):(
  <div className='d-flex justify-content-center align-items-center load'>
<div className='loader'></div>
    </div> )
}

export default Products
