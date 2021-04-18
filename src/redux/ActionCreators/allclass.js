import axios from "axios";

// export const getCharacterWithPagination = (url) => {
//   return {
//     type: "GET_CHARACTER_PAGINATED",
//     payload: axios.get(url),
//   };
// };

const allClass = (url) => {
	return {
		type: "GET_allClass_PAGINATED",
		payload: axios.get(url),
	};
};

export default allClass;
