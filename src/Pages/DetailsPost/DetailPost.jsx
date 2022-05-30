import React, { useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetPost } from "../../Actions/post";
import HeaderBlog from "../../Components/HeaderBlog/HeaderBlog";
import SidePost from "../../Components/SidePost/SidePost";

function DetailPost() {
  const dispatch = useDispatch();
  const { Id } = useParams();
  useEffect(() => {
    dispatch(GetPost(Id));
  }, []);
  const { Title, Article, Photo, Auteur, DatePost,Introduction } = useSelector(
    (state) => state.Post
  );
  let datePost = new Date(null);
  if (DatePost) {
    datePost.setTime(DatePost.seconds * 1000);
  }

  return DatePost ? (
    <div className="">
      <HeaderBlog />

      <div className="container content  ">

        <div class="row">
          <div class="content-area blog-section blog-post col-md-12 col-sm-12">
            <article class="type-post">
              <div class="entry-cover ">
                <div className=" text-center ">
                  <img src={Photo} alt="blog" className="img-fluid " />
                </div>

                <span class="post-date">
                  <a className="text-dark fw-bold">

                    {datePost.toDateString()}
                  </a>
                </span>
              </div>

              <div class="blog-content">
                <h3 class="entry-title">{Title}</h3>
                <div class="entry-meta">
                  <span class="post-admin">
                    Posted By
                    <a  title="Max" className="text-primary">
                       {Auteur}
                    </a>
                  </span>
                </div>
                <div class="entry-content">
                <blockquote>
								    {Introduction}
								</blockquote>

                  <p>{Article}</p>
                  
                  {/* <p>Give us any rule we'll break it. We're gonna make our dreams come true. Here he comes Here comes Speed Racer. He's a demon on wheels. Makin' your way in the world today takes everything you've got. Takin' a break from all your worries sure would help a lot. Believe it or not I'm walking on air. I never thought I could feel so free. Flying away on a wing and a prayer. Who could it be? Believe it or not its just me.</p> */}
                  {/* <p>Give us any rule we'll break it. We're gonna make our dreams come true. Here he comes Here comes Speed Racer. He's a demon on wheels. Makin' your way in the world today takes everything you've got. </p> */}
                  <div className="tags ">
                    <ul className="social pb-3">
                      <li>
                        <a title="facebook" >
                          <FaFacebook className="pointer"/>
                        </a>
                      </li>
                      <li>
                        <a title="Instagram">
                          <FaInstagram className="pointer"/>
                        </a>
                      </li>
                      <li>
                        <a title="Twitter" >
                          <FaTwitter className="pointer"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="d-flex justify-content-center align-items-center load">
      <div className="loader"></div>
    </div>
  );
}

export default DetailPost;
