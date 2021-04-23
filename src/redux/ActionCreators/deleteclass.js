import axios from "axios";

const deteleClass = (url) => {
    return {
        type: "DEL_Class",
        payload: axios.get(url),
    };
};

export default deteleClass;
