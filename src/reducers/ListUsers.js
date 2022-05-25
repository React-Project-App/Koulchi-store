import { LIST_USERS } from "../actionconstants/ActionCn";



export default function ListUsers(state = [], {type,payload}) {
    switch (type) {
        case LIST_USERS:
            const Users=payload.docs.map(doc=>({...doc.data(),id:doc.id}))
          
            return Users.length;

        default:
            return state;
    }
}