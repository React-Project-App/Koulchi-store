import {
  CHECK_LOGIN_USER,
  LOGIN,
  LOGIN_WITH_GOOGLE,
  LOGOUT,
  RESET_PASSWORD,
} from "../actionconstants/ActionCn";

export default function Auth(state = null, { type, payload }) {
  switch (type) {
    case LOGIN:
      return payload.user;
    case LOGOUT:
      return;
    case CHECK_LOGIN_USER:
      return payload;
    case LOGIN_WITH_GOOGLE:
      return payload;
    case RESET_PASSWORD:
      return state;
    default:
      return state;
  }
}
