import axios from "axios";

const allClass = (url) => {
	return {
		type: "GET_allClass_PAGINATED",
		payload: axios.get(url),
	};
};

export default allClass;
