import { LOGIN } from "../actionconstants/ActionCn";

export default function Auth(state = [], { type, payload }) {
    switch (type) {

        case LOGIN:
            return payload.user;
        case LOGOUT:
            return payload;
        default:
            return state;

    }
}