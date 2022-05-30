import React from "react";
import { useDispatch } from "react-redux";
import { DicresAmount, IncresAmount, RemoveFromCart } from "../../Actions/Cart";

const CartItems = ({ item }) => {
  const { Curprice, Amount, SubTotal, Title, id, Photo } = item;
  const dispatch = useDispatch();

  const HandleRemoveFromCart = () => {
    dispatch(RemoveFromCart(id));
  };
  const HandleIncresAmount = () => {
    console.log("dd");
    dispatch(IncresAmount(id));
  };
  const HandleDicresAmount = () => {
    dispatch(DicresAmount(id));
  };

  return (
    <section className="row item justify-content-lg-center pt-2 pb-2">
      <img
        className="item-img col-1 d-none d-lg-block d-md-block"
        src={Photo}
        alt={Title}
      />
      <div className="col-3 d-block d-lg-none d-md-none ms-4">
        <img className="item-img me-2" src={Photo} alt={Title} />
        <p className="">
          Price :<span className="fw-bold">{Curprice}</span>
        </p>
        <a className="link pointer" onClick={HandleRemoveFromCart}>
          Remove
        </a>
      </div>
      <div className="col-3 item-dcp d-none d-lg-block d-md-block">
        <p className="">{Title}</p>
        <p>
          Price :<span className="fw-bold">{Curprice}</span>
        </p>
        <a className="link pointer" onClick={HandleRemoveFromCart}>
          Remove
        </a>
      </div>
      <div className="col-7 item-cunt row justify-content-center">
        <button className="btn2 col-2" onClick={HandleDicresAmount}>
          <a class="a">-</a>
        </button>
        <h3 className="item-inp col-1 text-center mt-1">{Amount}</h3>
        <button className="btn2" onClick={HandleIncresAmount}>
          <a class="a col-2">+</a>
        </button>
        <span className="fw-bold text-dark col-1 price-cunt ps-5 col-4 text-end pt-1  fs-4">
          {Amount * Curprice}
        </span>
      </div>
    </section>
  );
};

export default CartItems;
