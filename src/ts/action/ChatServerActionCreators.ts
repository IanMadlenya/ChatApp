import {RawMessageState} from "../Message";
import MessageStore from "../store/MessageStore";
import ThreadStore from "../store/ThreadStore";

export default class ChatServerActionCreators
{

	public static receiveAll(rawMessages:RawMessageState[])
	{
		ThreadStore.receiveRawMessages(rawMessages);
		MessageStore.receiveRawMessages(rawMessages);
	}

	public static receiveCreatedMessage(createdMessage:RawMessageState)
	{
		// MessageStore.receiveRawCreatedMessage(createdMessage);
	}
}