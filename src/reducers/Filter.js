import { FILTER_SEARCH } from "../actionconstants/ActionCn";



export default function Filter(state = [], {type,payload}) {
    switch (type) {
        case FILTER_SEARCH:
            const Products=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
            return Products;
    
        default:
            return state;
    }
}