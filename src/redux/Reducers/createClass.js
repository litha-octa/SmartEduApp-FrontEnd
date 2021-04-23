// const initialState = {
//     result: {},
//     isPending: false,
//     isFulfilled: false,
//     isRejected: false,
//     error: {},
//     currentUser: {},
// };

// export const createClassReducer = (state = initialState, { type, payload }) => {
//     switch (type) {
//         case 'POST_CREATECLASS_PENDING':
//             return {
//                 ...state,
//                 isPending: true,
//                 isFulfilled: false,
//                 isRejected: false,
//             };
//         case 'POST_CREATECLASS_FULFILLED':
//             return {
//                 ...state,
//                 isFulfilled: true,
//                 isPending: false,
//                 result: payload.data.result,
//             };
//         case 'POST_CREATECLASS_REJECTED':
//             return {
//                 ...state,
//                 isRejected: true,
//                 isPending: false,
//                 result: payload,
//             };
//         default:
//             return state;
//     }
// };
// export default createClassReducer;