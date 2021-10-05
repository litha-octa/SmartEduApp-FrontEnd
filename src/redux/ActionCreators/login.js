import axios from "axios";
export const login = (url, data) => {
    return {
        type: "POST_login",
        payload: axios.post(url, data),
    };
};
// export const logoutUser = (data) => {
//   return {
//     type: "LOGOUT_USER",
//   };
// };

export const getUser = (url) => {
  return {
    type: "GET_getUser",
    payload: axios.get(url),
  };
};
//export default login;