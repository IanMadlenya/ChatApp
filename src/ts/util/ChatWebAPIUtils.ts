import {RawMessageState, MessageState} from "../Message";
import ChatServerActionCreators from "../action/ChatServerActionCreators";

export default class ChatWebAPIUtils
{
	static getAllMessages()
	{
		var rawMessages:RawMessageState[] = JSON.parse(localStorage.getItem('messages'));
		// simulate success callback
		ChatServerActionCreators.receiveAll(rawMessages);
	}

	static createMessage(message:MessageState, threadName:string)
	{
		// simulate writing to a database
		var rawMessages:RawMessageState[] = JSON.parse(localStorage.getItem('messages'));
		var timestamp = Date.now();
		var id = 'm_' + timestamp;
		var threadID = message.threadID || ('t_' + Date.now());
		var createdMessage = {
			id: id,
			threadID: threadID,
			threadName: threadName,
			authorName: message.authorName,
			text: message.text,
			timestamp: timestamp
		};
		rawMessages.push(createdMessage);
		localStorage.setItem('messages', JSON.stringify(rawMessages));

		// simulate success callback
		setTimeout(() => {
			ChatServerActionCreators.receiveCreatedMessage(createdMessage);
		}, 0);
	}
}