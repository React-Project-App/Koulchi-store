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
  const { Titre, Article, Photo, Auteur, DatePost } = useSelector(
    (state) => state.Post
  );
  let datePost = new Date(null);
  if (DatePost) {
    datePost.setTime(DatePost.seconds * 1000);
  }

  return DatePost ? (
    <div className="mt-5 pt-3">
      <HeaderBlog />

      <div className="container content  ">
        <div className="row">
          <div className="content-area blog-section blog-post col-md-12 col-sm-12">
            <article className="type-post">
              <div className="entry-cover ">
                <div>
                  <img src={Photo} alt="blog" className="col-12" />
                </div>

                <span className="post-date">
                  <a href="#">
                    <i class="fa fa-calendar-o"></i>
                    {datePost.toDateString()}
                  </a>
                </span>
              </div>
              <div className="blog-content">
                <h3 className="entry-title">{Titre}</h3>
                <div className="entry-meta">
                  <span className="post-admin">
                    <i className="fa fa-user"></i>Posted By
                    <a href="" title="Max" className="text-primary">
                     
                      {Auteur}
                    </a>
                  </span>
                </div>
                <div className="entry-content">
                  <p>{Article}</p>
                  {/* <blockquote>
									<i class="fa fa-quote-left"></i>
									Were gonna pay a call on the Addams Family. I have always wanted to have a question            neighbor just like you. I've wanted to live in a neighborhood with you.
								</blockquote> */}
                  {/* <p>Give us any rule we'll break it. We're gonna make our dreams come true. Here he comes Here comes Speed Racer. He's a demon on wheels. Makin' your way in the world today takes everything you've got. Takin' a break from all your worries sure would help a lot. Believe it or not I'm walking on air. I never thought I could feel so free. Flying away on a wing and a prayer. Who could it be? Believe it or not its just me.</p> */}
                  {/* <p>Give us any rule we'll break it. We're gonna make our dreams come true. Here he comes Here comes Speed Racer. He's a demon on wheels. Makin' your way in the world today takes everything you've got. </p> */}
                  <div className="tags ">
                    <ul className="social pb-3">
                      <li>
                        <a title="facebook">
                          <FaFacebook />
                        </a>
                      </li>
                      <li>
                        <a title="facebook">
                          <FaInstagram />
                        </a>
                      </li>
                      <li>
                        <a title="facebook">
                          <FaTwitter />
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
