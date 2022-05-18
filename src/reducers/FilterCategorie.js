import { FILTER_CATEGORIE } from "../actionconstants/ActionCn";


export default function FilterCategorie(state = [], {type,payload}) {
    switch (type) {
        case FILTER_CATEGORIE:
            const Categoriess=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
            console.log(Categoriess)
            return Categoriess;

        
        
        default:
            return state;
    }
}