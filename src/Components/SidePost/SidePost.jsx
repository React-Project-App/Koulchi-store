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
    // console.log(posts)
  return (
    <div class="col-md-3 col-sm-12 widget-area order-sm-1 ">
      {/* search */}
      <aside class="widget widget_search">
        <h3 class="widget-title">Search</h3>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            onChange={(e)=>settitre(e.target.value)}
            placeholder="Search Post. . ."
          />
          <span class="input-group-btn">
            <button class="btn btn-search" title="Search" type="button"
            onClick={Search}
            >
              <BsSearch />
            </button>
           
          </span>
        </div>
      </aside>

      {/* recent Post */}

      <aside class="widget widget_latest_post">
        <h3 class="widget-title">recent posts</h3>
        {
            (posts.length>0)?posts.map(post=>{
                return(
                    <>
                    <RecentPosts post={post}/>
                    <hr className="col-10 text-center ms-4"/>
                    </>
                )
            }):console.log("sss")
        }
      </aside>
    </div>
  );
}

export default SidePost;
