import axios from "axios";
const URL_API = "http://localhost:5555/api/prompt";

export const makeRequest = async (prompt: string) => {
	try {
		const { data } = await axios.post(URL_API, prompt);
		return data;
	} catch (error) {
		console.error(error);
	}
};
