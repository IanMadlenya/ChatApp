import MessageStore from "../store/MessageStore";
import ChatWebAPIUtils from "../util/ChatWebAPIUtils";
import ChatMessageUtils from "../util/ChatMessageUtils";

export default class ChatMessageActionCreators
{
	public static createMessage(text:string, currentThreadID:string)
	{
		MessageStore.createMessage(text, currentThreadID);
		var message = ChatMessageUtils.getCreatedMessageData(text, currentThreadID);
		ChatWebAPIUtils.createMessage(message, '');
	}
}