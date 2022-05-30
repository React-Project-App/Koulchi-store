import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../CssFiles/Blog.css'
import {FaAngleDoubleRight} from 'react-icons/fa'
import SidePost from '../../Components/SidePost/SidePost'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllPosts } from '../../Actions/post'
import Post from '../../Components/Post'
import HeaderBlog from '../../Components/HeaderBlog/HeaderBlog'

function Blog() {
const dispatch=useDispatch()
useEffect(()=>{
	dispatch(GetAllPosts())
}
	,[])

	const post=useSelector((state) => state.Post)
	const searchPost=useSelector((state) => state.SearchPost)
	let posts=post
	if (searchPost.length>0) {
		posts=searchPost
	}
	

  return (posts.length>0)?(
    <div className='mt-5 pt-3'>
      <HeaderBlog/>
            <div className="container ">
				
				<div className=" row ">
                    <div className='col-md-9 col-sm-12 '>
					{


						posts.map(post=>{
							
							return(
								<Post post={post}/>
							)
						
						})
					}
                    

					
                    
                    </div>
                    <SidePost/>
                </div>
                 
                
                
            </div>
           
    </div>
  ):(
    <div className="d-flex justify-content-center align-items-center load">
      <div className="loader"></div>
    </div>
  );
}

export default Blog
