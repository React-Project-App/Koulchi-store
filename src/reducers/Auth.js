import { CHECK_LOGIN_USER, LOGIN, LOGIN_WITH_GOOGLE, LOGOUT } from "../actionconstants/ActionCn";

export default function Auth(state = [], { type, payload }) {
    switch (type) {

        case LOGIN:
            return payload.user;
        case LOGOUT:
            localStorage.clear();
            return ;
        case CHECK_LOGIN_USER:
            return payload;
        case LOGIN_WITH_GOOGLE:
            localStorage.setItem("Email",payload.email);
            localStorage.setItem("Name",payload.displayName);
            return payload;    
        default:
            return state;

    }
}