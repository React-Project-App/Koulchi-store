import React from 'react'
import { Link } from 'react-router-dom'

const ProductsListe = ({product}) => {
    const{Title,Price,Photo,id}=product
  return (
    <div className='col-4'>
       
      
   
    <div className="card shadow h-75">
        <img className="card-img-top h-75 " src={Photo} alt={Title}   />
        <div className="card-body">
            <h4 className="card-title">{Title}</h4>
            <p className="card-text">{Price}</p>
        </div>
        <Link to={`/products/${id}`} className='btn btn-primary'>View</Link>
        
    </div>
    </div>
    
  )
}

export default ProductsListe