import { USER_LOGIN, USER_LOGOUT } from "./constans";

let initialState = localStorage.getItem("auth")
  ? JSON.parse(localStorage.getItem("auth"))
  : {
      token: null,
      role: null,
    };

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        token: action.token,
        role: action.role,
      };

    case USER_LOGOUT:
      return {
        token: null,
        role: null,
      };

    default:
      return state;
  }
}
