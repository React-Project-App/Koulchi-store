import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const {Id} =useParams();
  return (
    <div>
      {Id}
    </div>
  )
}

export default ProductDetails
