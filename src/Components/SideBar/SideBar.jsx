import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FilterSearch } from '../../Actions/Filter';
import {FaFilter} from 'react-icons/fa'
import {  GetCategories } from '../../Actions/Categorie';
import { FilterCategorie } from '../../Actions/FilterCategorie';
const SideBar=()=> {

  const dispatch=useDispatch();
  const [title,settitle]=useState("");
  const Search=title=>{
    
   dispatch(FilterSearch(title))
  }

  const filterCat=(cat)=>{
    dispatch(FilterCategorie(cat))
  }
  const filterCatt=()=>{
    dispatch(FilterCategorie(""))
  }
  const AllProduct=_=>{
    dispatch(FilterSearch(""))
    settitle("")
   }
useEffect(()=>{
  
  dispatch(GetCategories());
  
},[])
const categories=useSelector(state=>state.Categories)
// console.log(categories)
// console.log(categories)
// categories.map(cat=>{
// })
  // const products= useSelector(state=>state.Filter)
  return (
    
    <div className='container   text-center'>
    <a class="btn btn-primary col-12 w-25 mx-auto fit-btn shadow-none " data-bs-toggle="offcanvas" href="#sidebar" role="button" aria-controls="offcanvasExample">
            <FaFilter/> Filter
          </a>
    {/* ------------------------------------ */}
    <section id="sidebar"  class="col-6 col-lg-2 pt-4 offcanvas offcanvas-star " tabindex="-1"   aria-labelledby="offcanvasExampleLabel">
            <div class="list-group pt-3">
                <li><a class=" pointer list-group-item list-group-item-action mb-2 rounded  active-filter" 
                onClick={()=>{
                  filterCatt();
                  AllProduct()}}
                >All</a></li>
                <li><input className='form-control shadow-none' type="text" value={title}  onChange={e=>settitle(e.target.value)}
                placeholder="Search..."
                /></li>
                <li><a  class="list-group-item list-group-item-action mt-2 rounded  active-filter" onClick={()=>{filterCatt();Search(title)}}>Search</a></li>
                <h6 class="p-1 border-bottom mt-5">Category</h6>
                <ul class="list-group">
                  {
                    categories.map(cat=>{
                     return  <li className='pointer'><a class="  Active-cat list-group-item list-group-item-action mb-2 rounded " 
                     onClick={e=>
                      filterCat(e.target.innerText)}
                     
                     >{cat.CatName}</a></li>
                    })
                  }
                   
                    
                </ul>
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
