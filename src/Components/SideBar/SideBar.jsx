import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FilterSearch } from '../../Actions/Filter';
import {FaFilter} from 'react-icons/fa'
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
  return (
    <div className='container   text-center'>
    <a class="btn btn-primary col-12 w-25 mx-auto fit-btn shadow-none " data-bs-toggle="offcanvas" href="#sidebar" role="button" aria-controls="offcanvasExample">
            <FaFilter/> Filter
          </a>
    {/* ------------------------------------ */}
    <section id="sidebar"  class="col-6 col-lg-2 pt-4 offcanvas offcanvas-star" tabindex="-1"   aria-labelledby="offcanvasExampleLabel">
            <div class="list-group pt-3">
                <li><a href="#" class="list-group-item list-group-item-action mb-2 rounded  active-filter" 
                onClick={()=>{
                  AllProduct()}}
                >All</a></li>
                <li><input className='form-control shadow-none' type="text" value={title}  onChange={e=>settitle(e.target.value)}
                placeholder="Search..."
                /></li>
                <li><a href="#" class="list-group-item list-group-item-action mt-2 rounded  active-filter" onClick={()=>Search(title)}>Search</a></li>
                <h6 class="p-1 border-bottom mt-5">Category</h6>
                <ul class="list-group">
                    <li><a href="#" class="list-group-item list-group-item-action mb-2 rounded ">Living</a></li>
                    <li><a href="#" class="list-group-item list-group-item-action mb-2 rounded">Dining</a></li>
                    <li><a href="#" class="list-group-item list-group-item-action mb-2 rounded ">Office</a></li>
                    <li><a href="#" class="list-group-item list-group-item-action mb-2 rounded ">Bedroom</a></li>
                    <li><a href="#" class="list-group-item list-group-item-action mb-2 rounded ">Kitchen</a></li>
                </ul>
            </div>
          
            <div className='mt-5 pt-2'>
                <h6>Filter By Price</h6>
                <form class="ml-md-2 row w-100 justify-content-center">
                    <div>
                        <input type="range" id="volume" name="volume"
                               min="100" max="10000" step="100"/>
                        <label for="volume">Price</label>
                      </div>
                </form>
            </div>
            <div className='mt-5 pt-5'>
              <img style={{width:'100%'}} src="https://raw.githubusercontent.com/rachid-wanmid/DESIGN_ECO_POJ/main/LOGO.png" alt='LOGO Koulchi'  />
            </div>
        </section>
    {/* <aside className='container mt-5 pt-5'>
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
    </aside> */}
    </div>
  )
}

export default SideBar
