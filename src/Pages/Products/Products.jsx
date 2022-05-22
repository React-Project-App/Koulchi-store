import { AnimatePresence } from 'framer-motion';
import React,{useEffect} from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sweetpagination from 'sweetpagination';
import { GetAllProduct } from '../../Actions/Poroducts';
import Pagination from '../../Components/Pagination/Pagination';


import ProductsListe from '../../Components/ProductsListe';
import SideBar from '../../Components/SideBar/SideBar';

const Products = () => {
  const [currentPageData, setCurrentPageData] = useState([]);
  
    const dispatch= useDispatch()
    useEffect(() => {
        dispatch(GetAllProduct())
        console.log(currentPageData)
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
    <>
    <div className='container-fluid content'>

    <div className='row mt-5 pt-5'>
   
        <SideBar  />
    <div className='row d-flex justify-content-center  col-12 mt-3'>

    
    
    {/* <div class="row d-flex justify-content-center w-100 mt-5 pt-2 mb-4 ps-4 pt-5 "> */}
      {/* <AnimatePresence> */}

     
      {(
        
         currentPageData.map(product=>{

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
         

         <Sweetpagination
          currentPageData={setCurrentPageData}
          dataPerPage={15}
          getData={prod}
          navigation={true}
        />
         

         </>
        

  ):(
  <div className='d-flex justify-content-center align-items-center load'>
<div className='loader'></div>
    </div> )
}

export default Products
