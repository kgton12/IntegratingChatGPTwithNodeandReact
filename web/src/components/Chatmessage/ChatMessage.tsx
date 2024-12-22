import "./ChatMessage.css";
import { Avatar } from "../../assets/Avatar.tsx";

type ChatMessageProps = {
	user: TypeUser;
	message: string;
};

export enum TypeUser {
	user = 0,
	chatgpt = 1,
}

export const ChatMessage = ({ user, message }: ChatMessageProps) => {
	return (
		<>
			<div className={`chat-message ${user === TypeUser.chatgpt} && "chatgpt"`}>
				<div className="chat-message-center">
					<div className={`avatar ${user === TypeUser.chatgpt} && "chatgpt"`}>
						{user === TypeUser.chatgpt && <Avatar />}
					</div>
					<div className="message">{message}</div>
				</div>
			</div>
		</>
	);
};
