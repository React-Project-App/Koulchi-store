
import React from 'react'

const CartItems = ({item}) => {
 const {Price,Amount,SubTotal,Title} =item
  return (
    <div>
      
      <p> {Amount}</p>
      <p>{SubTotal}</p>
      <p>{Title}</p>
      <hr/>
    </div>
  )
}

export default CartItems
