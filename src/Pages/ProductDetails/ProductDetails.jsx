import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GETDETAILSPRODUCT } from "../../Actions/Poroducts";

import { Link } from "react-router-dom";
import { AddTocart } from "../../Actions/Cart";
import "../../CssFiles/style.css"
const ProductDetails = () => {
  const { Id } = useParams();

  const [pic, setpic] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GETDETAILSPRODUCT(Id));
  }, []);
  const {Title, Description, Price, Photo, MorePhoto} = useSelector((state) => state.products);
  console.log(Title);
  const changeImg = (e) => {
    setpic(e.currentTarget.src);
  };
  return Title  ? (
    <main class="container">
    <div class="row pt-5">
      <div class="col-lg-5 col-sm-12 col-md-8 row pt-3">
          <div class="col-12 big w-auto">
          <img 
            src={pic ? pic : Photo}
            class="img-fluid" 
            alt={Title}/>
          </div>
          <div class="col-12 d-flex justify-content-around pucadm pt-4">
          {MorePhoto&&(MorePhoto.map((pic) => {
              return (
                      <img
                        src={pic}
                        alt={Title}
                        onClick={changeImg}
                      />
                    );
                  }))}
          </div>
      </div>
      <div class="col-lg-6 col-sm-12 col-md-4 pt-3 ps-5">
          <h3 class="fw-bold pb-4 pt-3">{Title}</h3>
          <hr/>
          <span class = "product-price">{Price}</span>
          <span class = "old-price text-dark ">44000</span>
          <div class="pt-3 ps-1 row">
            <p class="col-12">QUANTITÉ</p>
            <div class="quantité col-5 pt-1">
              <a class="pe-5" href="">-</a>2<a class="ps-5" href="">+</a>
              <hr class="quantité"/>
            </div>
            <div class="col-5 ps-5 adto" >
                  <Link
                    to="/Cart"
                    onClick={() => dispatch(AddTocart(Id))}
                    className="btn btn-primary"
                  >
                    Add to cart
                  </Link>  
              </div>
          </div>
      </div>
    </div>
  </main>
  ) :  <>Loading</>

};

export default ProductDetails;
