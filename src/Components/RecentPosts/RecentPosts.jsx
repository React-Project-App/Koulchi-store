import React from "react";
import { Link } from "react-router-dom";

function RecentPosts(post) {
  
  
  const { Titre,  Photo, Auteur, DatePost, id ,Title}=post.post
//   console.log()
let datePost = new Date(null);
  if(DatePost){
  datePost.setTime(DatePost.seconds * 1000);}
  return (

    
      // <div className="latest-box">
      //   <div className=" ">

    <>
      <div class="latest-box recent-title">
        <div class=" ">

          <div className="row">
            <Link to={`/DetailPost/${id}`} className="col-sm-6">
              <img
                src={Photo}
                alt="Post"
              />
            </Link>
            <div className="col-sm-6">
              <h5 className="pt-3">
                <Link to={`/DetailPost/${id}`} className="fs-6 fw-bold text-muted " title="need max shop.">
                  {Title}
                </Link>
              </h5>
            </div>
          </div>

          <span className="row text-center pt-2">
            <Link to={`/DetailPost/${id}`} className="calendar col-12" >
              <i className="fa fa-calendar-o"></i>{datePost.toDateString()}
            </Link>
            <Link to={`/DetailPost/${id}`} className="calendar col-12" >
             <span>Posted By</span> {Auteur}
            </Link >
          </span>
        </div>
      </div>
       <hr className="col-10 text-center ms-4" />
       </>

    
  );
}

export default RecentPosts;
