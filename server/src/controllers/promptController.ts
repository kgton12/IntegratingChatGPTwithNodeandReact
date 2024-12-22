import type { Request, Response } from "express";
import openAi from "../config/openAi";
import type { InputPrompt } from "../models/inputPrompt";

export const postText = async (req: Request, res: Response) => {
	const openApi = new openAi();
	const { prompt }: InputPrompt = req.body;

	try {
		const response = await openApi.textCompletion(prompt);

		res.status(200).json({
			success: true,
			data: response.choices[0].message.content,
		});
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	} catch (error: any) {
		console.log(error);

		res.status(400).json({
			success: false,
			message: `Error: ${error.response ? error.response.data : "There was a issue on the server"}`,
		});
	}
};
