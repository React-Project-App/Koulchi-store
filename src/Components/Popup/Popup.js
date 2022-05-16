import React from "react";
import '../../CssFiles/PopupStyle.css' 
import Payement from '../../Components/Payement/Payement'

const Popup = props => {
  return (
    <div className="popup-box ">

        <div className="box text-center ">
            <h2 className="text-dark">Checkout</h2>
            <span className="close-icon text-dark " onClick={props.handleClose}>X</span>
            <Payement/>
        </div>
      </div>
  );
};
 
export default Popup;