import React, { useState, useMemo,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUsers } from "../../Actions/ListUsers";
import { ProductRating } from "../../Actions/Poroducts";

import Rate from "../Rate/Rate";

const Rating = ({ RatingNumber, rate, ProductId,UserRate }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllUsers())
  }, []);
  const [rating, setRating] = useState(RatingNumber);
  const user =useSelector(state=>state.ListUsers)




  return (
    <div className="d-flex">
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
