import axios from "axios";

// export const getCharacterWithPagination = (url) => {
//   return {
//     type: "GET_CHARACTER_PAGINATED",
//     payload: axios.get(url),
//   };
// };

export const allClass  = (url) => {
	return{ 
			type : "GET_allClass",
			payload : axios.get(url),
		};
	};
