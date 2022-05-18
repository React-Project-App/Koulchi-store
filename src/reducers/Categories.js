import { CATEGORIE } from "../actionconstants/ActionCn";

export default function Categories(state = [], {type,payload}) {
    switch (type) {
        case CATEGORIE:
            const Categoriess=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
            return Categoriess;

        
        
        default:
            return state;
    }
}