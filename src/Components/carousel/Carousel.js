import React from 'react'

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleIndicators" className="carousel slide mt-5 pt-2 mt-lg-4 pt-lg-4" data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner mt-4">
      <div className="carousel-item active pointer">
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Brands%2FUntitled-1.png?alt=media&token=9abf087e-ae15-4d72-9739-fdec6a0cfae4" class="d-block w-100" alt="..." />
      </div>
      <div className="carousel-item pointer">
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2FMontre-connect_e-Apple.-.jpg?alt=media&token=3645d2aa-1536-4542-8596-6f50232560b5" class="d-block w-100" alt="..." />
      </div>
     <div className="carousel-item  pointer">
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Brands%2FUntitled-1.png?alt=media&token=9abf087e-ae15-4d72-9739-fdec6a0cfae4" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className=''>
  <h2 className="big-title">Featured Prodcucts</h2>
  </div>
  
  </>
  )
}

export default Carousel
