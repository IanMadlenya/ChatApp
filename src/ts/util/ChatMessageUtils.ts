import {RawMessageState, MessageState} from "../Message";
export default class ChatMessageUtils
{
	static convertRawMessage(rawMessage:RawMessageState, currentThreadID?:string):MessageState
	{
		return {
			threadID: rawMessage.threadID,
			authorName: rawMessage.authorName,
			date: new Date(rawMessage.timestamp),
			text: rawMessage.text,
			isRead: rawMessage.threadID == currentThreadID
		};
	}

	static getCreatedMessageData(text:string, currentThreadID:string)
	{
		var timestamp = Date.now();
		return {
			id: 'm_' + timestamp,
			threadID: currentThreadID,
			authorName: 'Bill', // hard coded for the example
			date: new Date(timestamp),
			text: text,
			isRead: true
		};
	}
}