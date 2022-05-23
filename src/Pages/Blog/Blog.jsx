import React from 'react'
import { Link } from 'react-router-dom'
import '../../CssFiles/Blog.css'
// import '../../image/imgs/blog-1.jpg'

function Blog() {
  return (
    <div className='mt-5 pt-3'>
      <div class="page-banner container-fluid no-padding">
			
				<div class="container">
					<div class="banner-content">
						<h3 className='text-light'>Our Blog</h3>
						<p className='text-light'>our vision is to be Earth's most customer centric company</p>
					</div>
					<ol class="breadcrumb">
						<li><a href="" title="Home" className='text-light'>Home</a></li>							
						<li class="text-primary">Blog</li>
					</ol>
				</div>
			</div>
            <div class="container ">
				
				<div class=" row ">
                    <div className='col-md-9 col-sm-12 '>
                    <div className='col-12'>
                    <div class="type-post ">
						<div class="col-md-5 col-sm-12 col-xs-12 noà-padding entry-cover">
							<a href="">
                                <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Post%2Fblog-1.jpg?alt=media&token=88747343-beb9-41e7-ba31-307fe2f8a3aa" alt="blog"/>
                                </a>
							<span class="post-date"><a href="#"><i class="fa fa-calendar-o"></i>July 16</a></span>
						</div>
						<div class="col-md-7 col-sm-12 col-xs-12 blog-content">
							<h3 class="entry-title"><a title="new Collectios are imported In Our shop." href="blog-post.html">new Collectios are <span>imported</span> In Our shop.</a></h3>
							<div class="entry-meta">
								{/* <span class="post-like"><a href="#" title="224 Likes"><i class="fa fa-heart-o"></i>224 Likes</a></span> */}
								<span class="post-admin"><i class="fa fa-user"></i>Posted By<a href="#" title="Max">Max</a></span>
							</div>
							<div class="entry-content">
								<p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
								<Link to="" title="Read More" class=" btn btn-primary text-light shadow-none">Read More</Link>
							</div>
						</div>
					</div>
                    
                    </div>
					<div className='col-12'>
                    <div class="type-post ">
						<div class="col-md-5 col-sm-12 col-xs-12 noà-padding entry-cover">
							<a href="">
                                <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Post%2Fblog-2.jpg?alt=media&token=4866b374-080e-454c-96c4-4c5ce4dee00d" alt="blog"/>
                                </a>
							<span class="post-date"><a href="#"><i class="fa fa-calendar-o"></i>July 16</a></span>
						</div>
						<div class="col-md-7 col-sm-12 col-xs-12 blog-content">
							<h3 class="entry-title"><a title="new Collectios are imported In Our shop." href="blog-post.html">new Collectios are <span>imported</span> In Our shop.</a></h3>
							<div class="entry-meta">
								{/* <span class="post-like"><a href="#" title="224 Likes"><i class="fa fa-heart-o"></i>224 Likes</a></span> */}
								<span class="post-admin"><i class="fa fa-user"></i>Posted By<a href="#" title="Max">Max</a></span>
							</div>
							<div class="entry-content">
								<p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
								<Link to="" title="Read More" class=" btn btn-primary text-light shadow-none">Read More</Link>
							</div>
						</div>
					</div>
                    
                    </div>
                    <div className='col-12'>
                    <div class="type-post ">
						<div class="col-md-5 col-sm-12 col-xs-12 noà-padding entry-cover">
							<a href="">
                                <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Post%2Fblog-5.jpg?alt=media&token=dbd1f184-9f40-43b7-9d90-c0395a794a2a" alt="blog"/>
                                </a>
							<span class="post-date"><a href="#"><i class="fa fa-calendar-o"></i>July 16</a></span>
						</div>
						<div class="col-md-7 col-sm-12 col-xs-12 blog-content">
							<h3 class="entry-title"><a title="new Collectios are imported In Our shop." href="blog-post.html">new Collectios are <span>imported</span> In Our shop.</a></h3>
							<div class="entry-meta">
								{/* <span class="post-like"><a href="#" title="224 Likes"><i class="fa fa-heart-o"></i>224 Likes</a></span> */}
								<span class="post-admin"><i class="fa fa-user"></i>Posted By<a href="#" title="Max">Max</a></span>
							</div>
							<div class="entry-content">
								<p>The weather started getting rough - the tiny ship was tossed. If not for the courage of the fearless If not for the courage of the Minnow would be lost.</p>
								<Link to="" title="Read More" class=" btn btn-primary text-light shadow-none">Read More</Link>
							</div>
						</div>
					</div>
                    
                    </div>
                    </div>
                    <div class="col-md-3 col-sm-12 widget-area order-sm-1 ">
                    {/* search */}
                        <aside class="widget widget_search">
                            <h3 class="widget-title">Search</h3>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search You Wants. . ."/>
                                <span class="input-group-btn">
                                    <button class="btn btn-search" title="Search" type="button"><i class="icon icon-Search"></i></button>
                                </span>
                            </div>
                        </aside>

                        {/* recent Post */}

                        <aside class="widget widget_latest_post">
						<h3 class="widget-title">recent posts</h3>
						<div class="latest-box">
							<div class="post-box">
								<a href="#">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Post%2Fblog-1.jpg?alt=media&token=88747343-beb9-41e7-ba31-307fe2f8a3aa" alt="Post"/>
                                </a>
								<h5><a href="#" title="need max shop.">need max shop</a></h5>
								<span><a class="calendar" href="#"><i class="fa fa-calendar-o"></i>July 20, 2016</a><a href="#"><i class="fa fa-heart-o"></i> 224 Likes</a><a href="#">Posted By Max</a></span>
							</div>
						</div>
                        <div class="latest-box">
							<div class="post-box">
								<a href="#">
                                    <img src="https://firebasestorage.googleapis.com/v0/b/ecommerceapp-b46e6.appspot.com/o/Post%2Fblog-2.jpg?alt=media&token=4866b374-080e-454c-96c4-4c5ce4dee00d" alt="Post"/>
                                </a>
								<h5><a href="#" title="Commenly use products">Commenly use products</a></h5>
								<span><a class="calendar" href="#"><i class="fa fa-calendar-o"></i>June 18, 2016</a><a href="#"><i class="fa fa-heart-o"></i> 224 Likes</a><a href="#">Posted By Max</a></span>
							</div>
						</div>
                        </aside>
                 </div>

                </div>
                 {/* side */}
                 
                
                
            </div>
           
    </div>
  )
}

export default Blog
