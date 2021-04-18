const initialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};

const allClassReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_allClass_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_allClass_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data.results,
        info: payload
      };
    case "GET_allClass_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload
      };
    default:
      return state;
  }
};

export default allClassReducer;
