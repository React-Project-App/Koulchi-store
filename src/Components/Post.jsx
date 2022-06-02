import React from "react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight,FaUser } from "react-icons/fa";


function Post(post) {
  const { Title,  Photo, Auteur, DatePost, id,Introduction } = post.post;
  let datePost = new Date(null);
  datePost.setTime(DatePost.seconds * 1000);

  return (
    <div className="col-12">
      <div class="type-post ">
        <div class="col-md-5 col-sm-12 col-xs-12 noà-padding entry-cover">
          <Link to="">
            <img src={Photo} alt="blog" />
          </Link>
          <span class="post-date ">
            <a >
              <i class="fa fa-calendar-o"></i>
              {datePost.toDateString()}
            </a>
          </span>
        </div>
        <div class="col-md-7 col-sm-12 col-xs-12 blog-content">
          <h3 class="entry-title">
            <a
              title="new Collectios are imported In Our shop."
            >
              {Title}
            </a>
          </h3>
          <div class="entry-meta">
            {/* <span class="post-like"><a href="#" title="224 Likes"><i class="fa fa-heart-o"></i>224 Likes</a></span> */}
            <span class="post-admin">
              {/* <i class="fa fa-user"></i> */}
              <span className="text-primary">Posted By </span> 
              <a  title="Max">
                
                {Auteur}
              </a>
            </span>
          </div>
          <div class="entry-content">
            <p>{Introduction}</p>
            <Link
              to={`/DetailPost/${id}`}
              title="Read More"
              class=" btn btn-primary text-light shadow-none"
            >
              Read More <FaAngleDoubleRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
