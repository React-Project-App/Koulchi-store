import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CssFiles/StyleProduct.css'
import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'
import { motion,AnimatePresence } from 'framer-motion'



const ProductsListe = ({product}) => {
    // const [heart,setheart]=useState(false);
    const{Title,Prevprice, Curprice,Photo,id,Categorie}=product
  return (
      
    // <div className="col-3 product-item  m-4">
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.1 }}

        className="col-3 product-item  m-4 pointer"
        >

                   
                   
        <div className="product-img">
            <img src={Photo} alt={Title} className="img-fluid d-block mx-auto tansparence"/>
           
            <div className="row btns w-100 mx-auto text-center">
                <button type="button" className="col-6 py-2">
                    <a  className="text-decoration-none text-white">Add to Cart</a>
                </button>
                <button type="button" className="col-6 py-2 ">
                    {/* <a href="Product page.html" className="text-decoration-none text-white">View</a> */}
                <Link to={`/products/${id}`} className='text-decoration-none text-light'>
                    View
                    </Link>
                </button>

            </div>
           
        </div>

        <div className="product-info p-3">
            <span className="product-type">{Categorie}</span>
            <a href="#" className="d-block text-dark text-decoration-none py-2 product-name">{Title}</a>
            <span className="product-price">{Curprice} DH</span>
            <span className="old-price text-dark ">{ Prevprice}DH</span>
        </div>
        </motion.div>
  
    
  )
}

export default ProductsListe
