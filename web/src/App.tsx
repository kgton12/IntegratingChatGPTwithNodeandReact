import "./styles/reset.css";
import "./styles/App.css";
import type React from "react";
import { useState } from "react";
import { makeRequest } from "./api/api.ts";
import { ChatMessage, TypeUser } from "./components/Chatmessage/ChatMessage.tsx";
import { SideMenu } from "./components/SideMenu/SideMenu.tsx";

function App() {
	const [inputText, setInputText] = useState("");
	const [chatLog, setChatLog] = useState([{ user: TypeUser.chatgpt, message: "Como posso te ajudar?" }]);

	async function handleSubMit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		const response = await makeRequest(inputText);

		const line = response.data.split("\n").map((value: string) => {
			return <p>{value}</p>;
		});

		setChatLog([
			...chatLog,
			{
				user: TypeUser.user,
				message: inputText,
			},
			{
				user: TypeUser.chatgpt,
				message: line,
			},
		]);

		setInputText("");
	}

	return (
		<div className="App">
			<SideMenu />
			<section className="chatBox">
				<div className="chat-log">
					{chatLog.map((message, index) => (
						<ChatMessage user={message.user} message={message.message} key={index} />
					))}
				</div>
				<div className="chat-input-holder">
					<form onSubmit={handleSubMit}>
						<textarea
							rows={1}
							className="chat-input-textarea"
							value={inputText}
							onChange={(e) => setInputText(e.target.value)}
						/>
					</form>
				</div>
			</section>
		</div>
	);
}

export default App;
