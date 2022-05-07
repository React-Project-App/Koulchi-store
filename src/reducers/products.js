import { GET_ALL_PRODUCTS, GET_FEATURED_PRODUCTS } from "../actionconstants/ActionCn";


export default function products(state = [], {type,pyload}) {
    switch (type) {
        case GET_ALL_PRODUCTS:

            const Products=pyload.docs.map(doc=>({...doc.data(),id:doc.id}))
            console.log(Products)
            return Products;
        case GET_FEATURED_PRODUCTS:
            const FeaturedProducts=pyload.docs.map(doc=>({...doc.data(),id:doc.id}))
            return FeaturedProducts;
        default:
            return state;
    }
}