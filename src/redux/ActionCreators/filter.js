import axios from "axios";

 export const filterCategory = (url) => {
  return {
    type: "GET_filterCategory",
    payload: axios.get(url),
  };
};

export const filterLevel= (url) => {
  return {
    type: "GET_filterLevel",
    payload: axios.get(url),
  };
};

export const filterPricing = (url) => {
  return {
    type: "GET_filterPricing",
    payload: axios.get(url),
  };
};

//export default filterCategory;