import { RECENT_POST } from "../actionconstants/ActionCn";

export default function RecentPosts(state = [], {type,payload}) {
    switch (type) {
        
        case RECENT_POST:
          const RecentPost = payload.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          return RecentPost;
        default:
          return state;
      }
}
