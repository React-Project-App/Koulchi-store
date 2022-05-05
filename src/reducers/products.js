

export default function products(state = [], {type,pyload}) {
    switch (type) {
        case "GET_ALL_PRODUCTS":
            return pyload;
        default:
            return state;
    }
}