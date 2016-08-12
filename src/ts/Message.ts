import * as weavejs from "weavejs";
import {Weave} from "weavejs";
import LinkableString = weavejs.core.LinkableString;
import LinkableBoolean = weavejs.core.LinkableBoolean;
import LinkableNumber = weavejs.core.LinkableNumber;
import ILinkableObject = weavejs.api.core.ILinkableObject;

export interface RawMessageState
{
	id: string;
	threadID: string;
	authorName: string;
	threadName: string;
	timestamp: number;
	text: string;
}

export interface MessageState
{
	threadID: string;
	authorName: string;
	date: Date;
	text: string;
	isRead: boolean;
}

export default class Message
{
	threadID = Weave.linkableChild(this, LinkableString);
	authorName = Weave.linkableChild(this, LinkableString);
	date = Weave.linkableChild(this, new LinkableString);
	text = Weave.linkableChild(this, new LinkableString);
	isRead = Weave.linkableChild(this, new LinkableBoolean);

	set value(message:MessageState)
	{
		this.threadID.value = message.threadID;
		this.authorName.value = message.authorName;
		this.date.value = message.date.toString();
		this.text.value = message.text;
		this.isRead.value = message.isRead;
	}

	get value()
	{
		return {
			threadID: this.threadID.value,
			authorName: this.authorName.value,
			date: new Date(this.date.value),
			text: this.text.value,
			isRead: this.isRead.value
		};
	}
}
Weave.registerClass(Message, "ChatApp.Message", null, "Message");