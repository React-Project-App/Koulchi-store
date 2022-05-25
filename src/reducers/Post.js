import {
  GET_ALL_POSTS,
  GET_POST,
  RECENT_POST,
} from "../actionconstants/ActionCn";

export default function Post(state = [], { type, payload }) {
  switch (type) {
    case GET_ALL_POSTS:
      const Posts = payload.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // console.log(Products)
      return Posts;
    case GET_POST:
      return payload.data();
    
    default:
      return state;
  }
}
