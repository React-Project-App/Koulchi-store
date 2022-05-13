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
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2FK-M-_-M-H-BOSCH.jpg?alt=media&token=ddc8a132-6df7-463f-90d9-9938066e4174" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item pointer">
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2FK-M-_-M-H-BOSCH.jpg?alt=media&token=ddc8a132-6df7-463f-90d9-9938066e4174" class="d-block w-100" alt="..." />
      </div>
      <div class="carousel-item pointer">
        <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Products%2FK-M-_-M-H-BOSCH.jpg?alt=media&token=ddc8a132-6df7-463f-90d9-9938066e4174" class="d-block w-100" alt="..." />
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
  <h2 class="big-title">Peatured Prodcucts</h2>
  <hr class="hr-title"/>
  </>
  )
}

export default Carousel
