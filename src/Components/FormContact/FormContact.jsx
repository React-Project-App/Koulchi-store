import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { SentMessage } from '../../Actions/Contact';
import {BsArrowUpRight} from 'react-icons/bs'
function FormContact() {
    const dispatch=useDispatch();
    const [Name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [Message,setMessage]=useState("");
    const obj={
            Name,Email,Message
    }
    const show=Name&&Email&&Message;

  return (
    <div className="col-md-12 col-lg-6 col-sm-12">
            <div className="contain mt-3">
            <input placeholder="Name.." class="container__input form-control shadow-none" 
            value={Name}
            onChange={e=>setName(e.target.value)}
            />
            <label class="container__label">Name</label>
          </div>

          <div className="mt-4 contain">
          <input
            type="text"
            placeholder="name@email.com"
            className="container__input form-control shadow-none"
            value={Email}
            onChange={e=>setEmail(e.target.value)}
          />
          <label class="container__label">Email</label>

            </div>

            <div className="mt-4 contain">
          <textarea
            // cols="30"
            rows="5"
            className="container__input form-control shadow-none"
            placeholder="Add a brief messge"
            value={Message}
            onChange={e=>setMessage(e.target.value)}
          ></textarea>
          <label class="container__label">Message</label>
          </div>
            {show&&(
                <button  className="btn btn-outline-primary shadow-none  mt-2" type="button"
                style={{width:"fit-content"}}
                onClick={_=>{
                      dispatch(SentMessage(obj))
                      setEmail("");
                      setName("");
                      setMessage("");
                }}
                >Submit Message <BsArrowUpRight className='mb-1'/></button>
            )}
          
        </div>
  )
}

export default FormContact
