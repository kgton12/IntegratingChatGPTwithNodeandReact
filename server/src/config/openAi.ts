import OpenAI from "openai";

export default class openAi {
	openAi: OpenAI;

	constructor() {
		this.openAi = new OpenAI({
			apiKey: process.env.OPENAI_API_KEY,
		});
	}

	async textCompletion(prompt: string): Promise<
		OpenAI.Chat.Completions.ChatCompletion & {
			_request_id?: string | null;
		}
	> {
		return await this.openAi.chat.completions.create({
			model: "gpt-4o-mini",
			messages: [{ role: "user", content: prompt }],
			response_format: {
				type: "text",
			},
			temperature: 1,
			max_completion_tokens: 2048,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
		});
	}
}
