import axios from "axios";

const filterCategory = (url) => {
  return {
    type: "GET_filterCategory",
    payload: axios.get(url),
  };
};

// const filterLevel= (url) => {
//   return {
//     type: "GET_filterLevel",
//     payload: axios.get(url),
//   };
// };

// const filterPricing = (url) => {
//   return {
//     type: "GET_filterPricing",
//     payload: axios.get(url),
//   };
// };



export default filterCategory;
