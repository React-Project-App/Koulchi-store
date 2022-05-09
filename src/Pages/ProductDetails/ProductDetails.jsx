import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { GETDETAILSPRODUCT } from '../../Actions/Poroducts';



const ProductDetails = () => {
const {Id}=useParams();
const [pic,setpic]=useState("");
const dispatch= useDispatch()
        dispatch(GETDETAILSPRODUCT(Id))     
      const products= useSelector(state=>state.products)
      const {Title,Description,Price,Photo,MorePhoto}=products;    
      const changeImg=e=>{
        setpic(e.currentTarget.src)
      }
  return (
    <div className='container'>
      <div class="card shadow h-75 col-10">
        <div class="card-body">
          <div className="w-100 border border-primary rounded rounded-5 d-flex justify-content-center">
           <img 
           class="card-img-top w-50 " 
           width="300px"
           src={pic?pic:Photo} 
           alt={Title}  
           />
          </div>
          <dir className="my-4">
            <h1 class="card-title d-inline text">{Title}</h1>
              <h4 className='text-primary ps-4 d-inline' >({Price}$)</h4>
              <span className="text-primary d-block mt-3">
              Description :
              </span>
              <p class="card-text">{Description}</p>
          </dir>
            <div className='container d-flex flex-wrap align-content-center'>
            {
              MorePhoto && (MorePhoto.map(pic=>{return(
                <img 
                class="card-img-top h-75 w-25  border border-primary rounded rounded-5 me-2" 
                src={pic} 
                alt={pic.id}  
                onClick={changeImg} 
                />
              )}))
            }
            </div>
        </div>
            <button 
            className='btn btn-outline-primary col-3 m-4' 
            // onClick={}
            >
              Ajouter au panier
            </button>
        </div>
      
      
    </div>
  )
}

export default ProductDetails


