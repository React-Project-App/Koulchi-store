import React from "react";
import '../../CssFiles/PopupStyle.css' 

import Payement from'../Payement/Payement'

export default ({Total}) => (
    <div className="text-center mt-2">
                <button className="btn-total " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <a className="a">Checkout</a>
                    </button>

{/* <!-- Modal --> */}
        <div className="modal-dialog modal-dialog-centered">

                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">CheckOut</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
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
