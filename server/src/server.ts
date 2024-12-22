import app from "./app";
import { getChatCompletion } from "./config/openAi";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT} 🔥🔥`);
});
