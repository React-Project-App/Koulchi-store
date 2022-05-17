import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FilterSearch } from '../../Actions/Filter';

const SideBar=(props)=> {

  const dispatch=useDispatch();
  const [title,settitle]=useState("");
  const Search=title=>{
   dispatch(FilterSearch(title))
    
    
  }
  const AllProduct=_=>{
    dispatch(FilterSearch(""))
     
    settitle("")
     
   }
  
  const products= useSelector(state=>state.Filter)
  if (products.length>0) {
  }
  return (
    <aside className='container mt-5 pt-5'>
        <div className='row mt-5'>
            <div className=''>
                <input type="text" value={title}  onChange={e=>settitle(e.target.value)}/>
                <button onClick={()=>Search(title)}>Search</button>
                <button onClick={()=>{
                 AllProduct()}}>ALL</button>
            </div>
            <div className='d-flex flex-column'>
                <a >Cat1</a>
                <a >Cat2</a>
                <a >Cat3</a>
                <a >Cat4</a>
            </div>
        </div>
    </aside>
  )
}

export default SideBar
