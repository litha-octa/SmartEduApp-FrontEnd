const initialState = {
    results: {},
    info: {},
    isPending: false,
    isFulfilled: false,
    isRejected: false,
    err: {},
};

const deleteClassReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case "DEL_Class_PENDING":
            return {
                ...state,
                isPending: true,
                isFulfilled: false,
                isRejected: false,
            };
        case "DEL_Class_FULFILLED":
            return {
                ...state,
                isFulfilled: true,
                isPending: false,
                results: payload.data.results,
                info: payload
            };
        case "DEL_Class_REJECTED":
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

export default deleteClassReducer;
