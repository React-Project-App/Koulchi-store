import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetFeaturedProduct } from "../../Actions/Poroducts";
import Carousel from "../../Components/carousel/Carousel";

import ProductsListe from "../../Components/ProductsListe";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFeaturedProduct());
  }, []);

  const FeaturedProducts = useSelector((state) => state.products);
  if (FeaturedProducts.length > 0) {
    return (
      <div className="content">
        <Carousel />
        <div className="container">
          <div className=" row justify-content-center">
            {FeaturedProducts.map((product) => {
              return <ProductsListe key={product.id} product={product} />;
            })}
          </div>
        </div>
        <h2 className="big-title">Our brands</h2>
        <hr className="hr-title" />
        <div className="row d-flex justify-content-around w-100 pt-5 pb-5">
          <div className="brand col-lg-3 col-6  d-flex justify-content-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Brands%2F14-Most-Famous-Mobile-Phone-Company-Logos.jpg?alt=media&token=46fd05ef-6f09-4f05-b993-6bc8ffab0b7c"
              alt=""
            />
          </div>
          <div className="brand col-lg-3 col-6  d-flex justify-content-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Brands%2FLenovo-logo.jpg?alt=media&token=69b5a193-8722-4ab6-900b-f93a865490cb"
              alt=""
            />
          </div>
          <div className="brand col-lg-3 col-6  d-flex justify-content-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Brands%2FHuawei-logo.jpg?alt=media&token=6293b1d6-ee3b-4691-94e9-480bd97e7e1a"
              alt=""
            />
          </div>
          <div className="brand col-lg-3 col-6 d-flex justify-content-center">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Brands%2FX-Hub.jpg?alt=media&token=a84352b3-f7d3-40b1-9b54-7d4fe4f1e05a"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center align-items-center load">
      <div className="loader"></div>
    </div>
  );
};

export default Home;
