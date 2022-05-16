import React from "react";
import '../../CssFiles/PopupStyle.css' 
import {FcNext} from 'react-icons/fc'
import {Popup} from 'reactjs-popup'
import Payement from'../Payement/Payement'

export default ({Total}) => (
    <div className="text-center mt-2">
                <button class="btn-total " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <a class="a">Checkout</a>
                    </button>

{/* <!-- Modal --> */}
        <div class="modal-dialog modal-dialog-centered">

                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">CheckOut</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Payement Total={Total}/>
                        </div>
                        {/* <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div> */}
                        </div>
                    </div>
                    </div>
        </div>
    </div>

)
