import * as weavejs from "weavejs";
import {Weave} from "weavejs";
import LinkableString = weavejs.core.LinkableString;
import {MessageState, default as Message} from "./Message";

export interface ThreadState
{
	id: string;
	name:string;
	lastMessage:MessageState;
}

export default class Thread
{
	id = Weave.linkableChild(this, LinkableString);
	name = Weave.linkableChild(this, LinkableString);
	lastMessage = Weave.linkableChild(this, Message);

	set value(thread:ThreadState)
	{
		this.id.value = thread.id;
		this.name.value = thread.name;
		this.lastMessage.value = thread.lastMessage;
	}

	get value():ThreadState
	{
		return {
			id: this.id.value,
			name: this.name.value,
			lastMessage: this.lastMessage.value
		}
	}
}
Weave.registerClass(Thread, "ChatApp.Thread");