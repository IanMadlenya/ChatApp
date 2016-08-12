import * as weavejs from "weavejs";
import ChatMessageUtils from "../util/ChatMessageUtils";
import ThreadStore from "./ThreadStore";

import LinkableHashMap = weavejs.core.LinkableHashMap;
import {RawMessageState, default as Message, MessageState} from "../Message";
import AbstractStore from "./AbstractStore";
import Dispatcher from "../dispatcher/Dispatcher";

class MessageStore extends AbstractStore
{

	private messages = Weave.linkableChild(this, new LinkableHashMap(Message));

	private addMessages(rawMessages:RawMessageState[]) {
		rawMessages.forEach((rawMessage) => {
			var messageState = ChatMessageUtils.convertRawMessage(rawMessage);
			var message = this.messages.requestObject(rawMessage.id, Message) as Message;
			message.value = messageState;
		});
	}

	private markAllInThreadRead(threadID:string)
	{
		for (var id of this.messages.getNames()) {
			var message = this.messages.getObject(id) as Message;
			if(message.threadID.value === threadID) {
				message.isRead.value = true;
			}
		}
	}

	private get(id:string):MessageState
	{
		var messages = this.messages;
		var message = messages.getObject(id) as Message;
		return message.value;
	}

	private getAll()
	{
		var messages = this.messages;
		return messages.getNames().map((id:string) => {
			return this.get(id);
		});
	}

	/**
	 * @param {string} threadID
	 */
	private getAllForThread(threadID:string) {

		var threadMessages:MessageState[] = [];

		for (var id of this.messages.getNames()) {
			var message = this.messages.getObject(id) as Message;
			if (message.threadID.value === threadID) {
				threadMessages.push(message.value);
			}
		}
		threadMessages.sort(function(a, b) {
			if (a.date < b.date) {
				return -1;
			} else if (a.date > b.date) {
				return 1;
			}
			return 0;
		});
		return threadMessages;
	}

	public getAllForCurrentThread() {
		return this.getAllForThread(ThreadStore.getCurrentID());
	}

	public clickThread()
	{
		this.markAllInThreadRead(ThreadStore.getCurrentID());
	}

	public createMessage(text:string, currentThreadID:string)
	{
		var messageState = ChatMessageUtils.getCreatedMessageData(text, currentThreadID);
		var message = this.messages.requestObject(messageState.id, Message) as Message;
		message.value = messageState;
	}

	public receiveRawMessages(rawMessages:RawMessageState[])
	{
		this.addMessages(rawMessages);
		this.markAllInThreadRead(ThreadStore.getCurrentID());
	}
}

Weave.registerClass(MessageStore, "ChatApp.store.MessageStore", null, "MessageStore");
export default Dispatcher.root.requestObject("message_store", MessageStore, true);
