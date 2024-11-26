import { USER_LOGIN, USER_LOGOUT } from "./constans";

export function userLogin(token, role, username) {
  return {
    type: USER_LOGIN,
    token,
    role,
    username,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
