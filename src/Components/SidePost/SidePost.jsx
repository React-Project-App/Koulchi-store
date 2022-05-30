import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {  SearchPost } from "../../Actions/post";
import { RecentPost } from "../../Actions/RecentPosts";
import RecentPosts from "../RecentPosts/RecentPosts";
function SidePost() {
    const [titre,settitre]=useState("")
    const dispatch=useDispatch()
    const Search=()=>{
        dispatch(SearchPost(titre.toLowerCase()))
    }
    
    useEffect((_) => {
      dispatch(RecentPost());
      }, []);
      const  posts= useSelector(
        (state) => state.RecentPosts
      );
  return (
    <div className="col-md-3 col-sm-12 widget-area order-sm-1 ">
      {/* search */}
      <aside className="widget widget_search">
        <h3 className="widget-title">Search</h3>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            onChange={(e)=>settitre(e.target.value)}
            placeholder="Search Post. . ."
          />
          <span className="input-group-btn">
            <button className="btn btn-search" title="Search" type="button"
            onClick={Search}
            >
              <BsSearch />
            </button>
           
          </span>
        </div>
      </aside>



      <aside className="widget widget_latest_post">
        <h3 className="widget-title">recent posts</h3>
        {

            (posts.length>0)&&(posts.map((post,key)=>{
                return(
                    <>
                    <RecentPosts post={post} key={key}/>
                    </>

                )
            }))
        }
      </aside>
    </div>
  );
}

export default SidePost;
