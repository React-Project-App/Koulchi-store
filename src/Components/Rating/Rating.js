import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { ProductRating } from "../../Actions/Poroducts";
import Rate from "../Rate/Rate";

const Rating = ({ RatingNumber, rate, ProductId }) => {
  // console.log(RatingNumber)
  const dispatch = useDispatch();
  const [rating, setRating] = useState(RatingNumber);

  // useMemo(() => {

  // },[rating]);
  return (
    <div className="d-flex">
      {/* <Rate rating={rating} onRating={(rate) => setRating(rate)}  rate="rated" /> */}
      <Rate
        rating={rating}
        onRating={(ratee) => {
          setRating(ratee);
          dispatch(ProductRating(ProductId, ratee));
        }}
        rate={rate}
      />
      <p> ({rating} reviews ) </p>
    </div>
  );
};

export default Rating;
