

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AMOUNTPRODUCT, GETDETAILSPRODUCT } from "../../Actions/Poroducts";

import { Link } from "react-router-dom";
import { AddTocart } from "../../Actions/Cart";
import "../../CssFiles/style.css";
const ProductDetails = () => {
  const { Id } = useParams();
  const [pic, setpic] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GETDETAILSPRODUCT(Id));
  }, []);
  const { Title, Price, Photo, MorePhoto } = useSelector(
    (state) => state.products
  )

const [Amount, setAmount] = useState(1);

  const handelInAmount = () => {
    setAmount(Amount +1);

    console.log(Amount);
  }

  const handelDecAmount = () => {
    if(Amount > 1){
    setAmount(Amount - 1)
  }
  }

  const changeImg = (e) => {
    setpic(e.currentTarget.src);
  }
  return Title ? (
    <main className="container">
      <div className="row pt-5">
        <div className="col-lg-5 col-sm-12 col-md-8 row pt-3">
          <div className="col-12 big w-auto">
            <img src={pic ? pic : Photo} className="img-fluid" alt={Title} />
          </div>
          Name
          <div className="col-12 d-flex justify-content-around pucadm pt-4">
            {MorePhoto &&
              MorePhoto.map((pic) => {
                return <img src={pic} alt={Title} onClick={changeImg} />;
              })}
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-4 pt-3 ps-5">
          <h3 className="fw-bold pb-4 pt-3">{Title}</h3>
          <hr />
          <span className="product-price">{Price}</span>
          <span className="old-price text-dark ">44000</span>
          <div className="pt-3 ps-1 row">
            <p className="col-12">QUANTITÉ</p>
            <div className="quantité col-5 pt-1">
              <a className="pe-4" onClick={handelDecAmount}>
                -
              </a>
              {Amount}
              <a className="ps-4" onClick={handelInAmount}>
                +
              </a>
              <hr className="quantité" />
            </div>
            <div className="col-5 ps-5 adto">
              <Link
                to="/Cart"
                onClick={() => dispatch(AddTocart(Id,Amount))}
                className="btn btn-primary"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : (
    <>Loading</>
  );
};

export default ProductDetails;