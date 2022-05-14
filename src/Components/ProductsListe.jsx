import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../CssFiles/StyleProduct.css'
import {BsHeartFill} from 'react-icons/bs'
import {BsHeart} from 'react-icons/bs'



const ProductsListe = ({product}) => {
    const [heart,setheart]=useState(false);
    const{Title,Price,Photo,id}=product
  return (
    <div className="col-3 product-item  m-4">
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
            <span className="heart-icon">
               
                { (heart  ?  
                <BsHeartFill className='heart-fill' onClick={_=>setheart(!heart)}/> :
                <BsHeart className='heart-fill' onClick={_=>setheart(!heart)}/>)}
            </span>
        </div>

        <div className="product-info p-3">
            <span className="product-type">Categorie</span>
            <a href="#" className="d-block text-dark text-decoration-none py-2 product-name">{Title}</a>
            <span className="product-price">{Price} DH</span>
            <span className="old-price text-dark ">200.50 DH</span>
        </div>
    </div>

    // <div classNameName='col-4'>
       
      
   
    // <div classNameName="card shadow h-75">
    //     <img classNameName="card-img-top h-75 " src={Photo} alt={Title}   />
    //     <div classNameName="card-body">
    //         <h4 classNameName="card-title">{Title}</h4>
    //         <p classNameName="card-text">{Price}</p>
    //     </div>
    //     <Link to={`/products/${id}`} classNameName='btn btn-primary'>View</Link>
        
    // </div>
    // </div>
    
  )
}

export default ProductsListe
