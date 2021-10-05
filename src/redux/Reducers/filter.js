const initialState = {
  results: {},
  info: {},
  isPending: false,
  isFulfilled: false,
  isRejected: false,
  err: {},
};

export const filterCategoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_filterCategory_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_filterCategory_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data,
        info: payload.data.info,
      };
    case "GET_filterCategory_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    default:
      return state;
  }
};
export const filterLevelReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_filterLevel_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_filterLevel_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data,
        info: payload.data.info,
      };
    case "GET_filterLevel_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    default:
      return state;
  }
};

export const filterPricingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_filterPricing_PENDING":
      return {
        ...state,
        isPending: true,
        isFulfilled: false,
        isRejected: false,
      };
    case "GET_filterPricing_FULFILLED":
      return {
        ...state,
        isFulfilled: true,
        isPending: false,
        results: payload.data,
        info: payload.data.info,
      };
    case "GET_filterPricing_REJECTED":
      return {
        ...state,
        isRejected: true,
        isPending: false,
        err: payload,
      };
    default:
      return state;
  }
};
 
//export default filterCategoryReducer