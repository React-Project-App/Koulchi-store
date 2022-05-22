import { AMOUNT_PRODUCT, GET_ALL_PRODUCTS, GET_DETAILS_PRODUCT, GET_FEATURED_PRODUCTS, RATE_PRODUCT } from "../actionconstants/ActionCn";


export default function products(state = [], {type,pyload}) {
    switch (type) {
        case GET_ALL_PRODUCTS:
            const Products=pyload.docs.map(doc=>({...doc.data(),id:doc.id}))
            console.log(Products)
           
            return Products;
        case GET_FEATURED_PRODUCTS:
            const FeaturedProducts=pyload.docs.map(doc=>({...doc.data(),id:doc.id}))
            return FeaturedProducts;
        case GET_DETAILS_PRODUCT:
            const details=pyload.data();
            return details;

            case RATE_PRODUCT :

                return state;
 
        default:
            return state;
    }
}