import { CHECK_LOGIN_USER, LOGIN, LOGOUT } from "../actionconstants/ActionCn";

export default function Auth(state = [], { type, payload }) {
    switch (type) {

        case LOGIN:
            return payload.user;
        case LOGOUT:
            return ;
        case CHECK_LOGIN_USER:
            return payload;
        default:
            return state;

    }
}