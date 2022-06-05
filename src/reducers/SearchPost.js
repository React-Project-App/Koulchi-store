import { SEARCH_POST } from "../actionconstants/ActionCn";


export default function SearchPost(state = [], {type,payload}) {
    switch (type) {
        case SEARCH_POST:
            const Post=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
            return Post;
        default:
            return state;
    }
}