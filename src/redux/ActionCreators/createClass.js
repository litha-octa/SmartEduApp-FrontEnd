import axios from "axios";
export const createClass = (url ,data) => {
    return {
        type: "CREATECLASS",
        payload: axios.post(url, data),
    };
};

