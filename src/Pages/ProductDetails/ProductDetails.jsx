import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AMOUNTPRODUCT, GETDETAILSPRODUCT } from "../../Actions/Poroducts";
import {BsStarFill ,BsHeart,BsHeartFill} from 'react-icons/bs'
import { Link } from "react-router-dom";
import { AddTocart } from "../../Actions/Cart";
import "../../CssFiles/style.css";
import PageNotFound from "../PageNotFound/PageNotFound";
import { motion } from "framer-motion";

const ProductDetails = () => {
  const navigate=useNavigate();
  const { Id } = useParams();
  const [pic, setpic] = useState("");
  const [heart,setheart]=useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GETDETAILSPRODUCT(Id));
  }, []);
  const { Title, Price, Photo, MorePhoto } = useSelector(
    (state) => state.products
  )
const Product={ Title, Price, Photo, MorePhoto }
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
    if (Product.length===0) {
return
    }
    return Title  ? (
      <main className="container mt-5 pt-4">
        <div className="row pt-5 ps-4">
          <div className="col-lg-5 col-sm-12 col-md-6 row pt-4">
            <div className="col-12 big w-auto">
              <img src={pic ? pic : Photo} className="img-fluid" alt={Title} />
            </div>
            
            <div className="col-12 d-flex justify-content-around pucadm py-4 ">
              {MorePhoto &&
                MorePhoto.map((pic) => {
                  return (
                    <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    whileHover={{ scale: 1.2 }}
            
                    
                    >
                  <img src={pic} alt={Title} className="col-3 mt-4 pointer" onClick={changeImg} />
                  </motion.div>
                  
                  );
                })}
            </div>
          </div>
          <div className="col-lg-7 col-sm-12 col-md-6 pt-3 ps-lg-5">
            <h3 className="fw-bold pb-4 pt-3">{Title}</h3>
            <hr />
            <span className="product-price">{Price} Dh</span>
            <span className="old-price text-dark ">{Price+50}</span>
            <div className="pt-3 ps-1 row">
             
              <div className="pt-2 ps-1 row col-12 d-flex justify-content-around">
              <div className="quantité col-5  row">
              <p className="fw-bold ms-4 ">QUANTITÉ</p>
              <a className=" col-4 text-center fw-bold pointer Amount" onClick={handelDecAmount}>-</a>
              <p className="col-4 text-center mt-2 fw-bold">{Amount}</p>
              <a className="col-4 text-center fw-bold pointer Amount" onClick={handelInAmount}>+</a>
              <hr className="ms-4 col-9 "/>
            </div>
              </div>
              <div className="ps-4 pt-1 adto d-flex col-7 row ">
                <Link
                  to="/Cart"
                  onClick={() => dispatch(AddTocart(Id,Amount))}
                  className="col-9 btn1"
                >
                  Add to cart
                </Link>
                {/* { (heart  ?  
                  <BsHeartFill className='heart-fill pointer col-3 heart' onClick={_=>setheart(!heart)}/> :
                  <BsHeart className='heart-fill pointer col-3  heart' onClick={_=>setheart(!heart)}/>)} */}
                
              </div>
            </div>
            <div className="ps-1 pt-3">
            <p className="fw-bold pb-1 ps-1">PRODUCT DETAILS</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum orci a sapien imperdiet maximus.
              Suspendisse vel ex eget mauris efficitur finibus eu a enim. Aenean tellus neque, consectetur sit amet lacus
              a,
              hendrerit ornare urna. Fusce venenatis lorem vitae augue suscipit, eu tempor massa vulputate. Praesent
              iaculis velit libero,
              vel faucibus sem pulvinar vel. Curabitur viverra nisl dui, a venenatis felis pellentesque id. Donec non
              lacus diam.
            </p>
            <div className="d-flex justify-content-start review mt-4 align-items-center">
             <BsStarFill/>
             <BsStarFill/>
             <BsStarFill/>
             <BsStarFill/>
             <BsStarFill/>
              <span className="ps-2">(review 150)</span>
            </div>
            </div>
          </div>
        </div>
      </main>
    ) : (
      <div className='d-flex justify-content-center align-items-center load'>
  <div className='loader'></div>
      </div> )
    
  // }
  // else{
  //   return <PageNotFound/>
  // }
  
};

export default ProductDetails;
