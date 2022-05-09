import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GETDETAILSPRODUCT } from "../../Actions/Poroducts";

import { Link } from "react-router-dom";
import { AddTocart } from "../../Actions/Cart";
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
    <div className="container">
      <div className="card shadow h-75 col-10">
        <div className="card-body">
          <div className="w-100 border border-primary rounded rounded-5 d-flex justify-content-center">
            <img
              className="card-img-top w-50 "
              width="300px"
              src={pic ? pic : Photo}
              alt={Title}
            />
          </div>
          <dir className="my-4">
            <h1 className="card-title d-inline text">{Title}</h1>
            <h4 className="text-primary ps-4 d-inline">({Price}$)</h4>
            <span className="text-primary d-block mt-3">Description :</span>
            <p className="card-text">{Description}</p>
          </dir>
          <div className="container d-flex flex-wrap align-content-center">
            {MorePhoto.map((pic) => {
              return (
                <img
                  className="card-img-top h-75 w-25  border border-primary rounded rounded-5 me-2"
                  src={pic}
                  alt={pic.id}
                  onClick={changeImg}
                />
              );
            })}
          </div>
        </div>
        <Link
          to="/Cart"
          onClick={() => dispatch(AddTocart(Id))}
          className="btn btn-primary"
        >
          Add to cart
        </Link>
      </div>
    </div>
  ) :  <>Loading</>

};

export default ProductDetails;
