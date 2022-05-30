import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ClearCart } from "../../Actions/Cart";
import CartItems from "../../Components/CartItems/CartItems";
import "../../CssFiles/CartStyle.css";
import Payement from "../../Components/Payement/Payement";
import Popup from "../../Components/Popup/Popup";
import { auth, db } from "../../FirebaseConfig/FirebaseConfig";
import { doc, setDoc } from "firebase/firestore";
const Cart = () => {
  const CartProducts = useSelector((state) => state.Cart);
  console.log("fff", CartProducts);
  const [Total, setTotal] = useState(0);
  useEffect(() => {
    const ProductTotal = CartProducts.reduce((Product, item) => {
      console.log(item);
      return Product + Number(item.Curprice) * Number(item.Amount);
    }, 0);
    console.log(ProductTotal);
    setTotal(ProductTotal);
    localStorage.setItem("Cart", JSON.stringify(CartProducts));
    //  if(localStorage.getItem("user")){
    //   setDoc(doc(db,"User", JSON.parse( localStorage.getItem("user")).uid),{
    //     name:JSON.parse( localStorage.getItem("user")).displayName,
    //     email:JSON.parse( localStorage.getItem("user")).email,
    //     Cart:CartProducts
    //   })
    //  }
  }, [CartProducts]);

  const dispatch = useDispatch();
  const Clear = (_) => {
    dispatch(ClearCart());
  };
  const [isOpen, setIsOpen] = useState(false);
  const user = auth.currentUser;
  const navigate = useNavigate();
  return CartProducts.length > 0 ? (
    <div
      className="items-list container-fluid"
      style={{ minHeight: "calc(100vh - 308px)" }}
    >
      <section className="row">
        <div className="col-4 text-center list-title">Product</div>
        <div className="col-4 text-center list-title ">Quantity</div>
        <div className="col-4 text-center list-title">Subtotal</div>
      </section>
      {CartProducts.map((Item) => {
        return <CartItems key={Item.id} item={Item} />;
      })}
      <section className=" row justify-content-lg-center justify-content-md-center">
        <div className="col-7 d-none d-lg-block d-md-block"></div>
        <div className="row col-12 col-md-5 col-lg-5 cart-total">
          <button className="btn-total col-6 ">
            <a className="a" onClick={Clear}>
              Remove All
            </a>
          </button>
          <button className="btn-total col-6">
            {" "}
            <Link className="a" to={"/store"}>
              Add More Product
            </Link>
          </button>
          <div className="col-12 row pt-3">
            <h4 className="col-6 text-center">Total :</h4>
            <p class="price-total col-6 text-center">{Total}</p>
          </div>
          {user ? (
            <Popup Total={Total} />
          ) : (
            <button
              className="btn-total col-12 text-white fw-bold"
              onClick={(_) => {
                navigate("/login");
              }}
            >
              Log in
            </button>
          )}
        </div>
      </section>
    </div>
  ) : (
    <div
      className="container  d-flex align-items-center justify-content-center "
      style={{ height: "100vh" }}
    >
      <div className="row border py-5 shadow">
        <div className=" text-center pb-3">
          <h1 className="text-primary col-12">Empty Cart</h1>
        </div>
        <div className="text-center">
          <Link to="/store" className="btn btn-outline-primary ">
            Add Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
