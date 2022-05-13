import React from 'react'
import { Link } from 'react-router-dom'
import '../CssFiles/StyleProduct.css'




const ProductsListe = ({product}) => {
    const{Title,Price,Photo,id}=product
  return (
    <div className="col-3 product-item mx-2 mt-4">
        <div className="product-img">
            <img src={Photo} alt={Title} className="img-fluid d-block mx-auto tansparence"/>
            <span className="heart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart"
                    viewBox="0 0 16 16">
                    <path
                        d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </span>
            <div className="row btns w-100 mx-auto text-center">
                <button type="button" className="col-6 py-2">
                    <a  className="text-decoration-none text-white">Add to Cart</a>
                </button>
                <button type="button" className="col-6 py-2 ">
                    {/* <a href="Product page.html" className="text-decoration-none text-white">View</a> */}
                <Link to={`/products/${id}`} className='text-decoration-none text-light'>View</Link>
                </button>
            </div>
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
