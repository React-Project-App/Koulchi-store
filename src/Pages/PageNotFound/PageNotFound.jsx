import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className='container'>

    <section class="Error row">
    <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2F404%20Error-rafiki%202.png?alt=media&token=16ce1494-a05c-4363-a1f3-84d2db3698a2" class="img-fluid col-12 img-Error" alt=""/>
    <h2 class="text-center">Page Not Found</h2>
    <button class="btn-error"><Link to="/Home" class="text-white">GO BACK HOME</Link></button>
    </section>
    </div>

  )
}

export default PageNotFound
