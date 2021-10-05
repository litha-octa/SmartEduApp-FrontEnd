const initialState = {
  currentUser: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,

};
 export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case "LOGOUT_USER":
    //   return {
    //     ...state,
    //     result: {},
    //   };
    case "POST_login_PENDING":
      return {
         ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "POST_login_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        result: payload.data.result,
      };
    case "POST_login_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        error: payload,
      };
    default:
      return state;
  }
};

export const getUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // case "LOGIN_USER":
    //   return {
    //     ...state,
    //     currentUser: payload,
    //   };
    // case "LOGOUT_USER":
    //   return {
    //     ...state,
    //     currentUser: {},
    //   };

    case "GET_getUser_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_getUser_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        currentUser: payload.data.result[0],
      };
    case "GET_getUser_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        result: payload,
      };
    default:
      return state;
  }
};

//export default loginReducer;