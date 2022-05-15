import React from 'react'

const Carousel = () => {
  return (
    <>
    <div id="carouselExampleIndicators" class="carousel slide mt-5 pt-5 mt-lg-4 pt-lg-4" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner mt-4">
      <div class="carousel-item active pointer">
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2Fban-e-co-instit.jpg?alt=media&token=9ab6b157-fdd6-4445-9087-c74915784ad3" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item pointer">
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2FMontre-connect_e-Apple.-.jpg?alt=media&token=3645d2aa-1536-4542-8596-6f50232560b5" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item pointer">
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2FK-M-_-M-H-BOSCH.jpg?alt=media&token=e9f12ae9-e9eb-4cc8-b580-e3e0345548c6" class="d-block w-100" alt="..." />
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div className=''>
  <h2 class="big-title">Featured Prodcucts</h2>
  {/* <hr class=" "/> */}
  </div>
  
  </>
  )
}

export default Carousel
