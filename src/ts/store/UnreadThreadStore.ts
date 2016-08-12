import * as weavejs from "weavejs";
import {Weave} from "weavejs";
import ThreadStore from "./ThreadStore";
import AbstractStore from "./AbstractStore";
import Dispatcher from "../dispatcher/Dispatcher";

export class UnreadThreadStore extends AbstractStore
{
	public getCount()
	{
		var threads = ThreadStore.getAll();
		var unreadCount = 0;
		for (var id in threads) {
			if (!threads[id].lastMessage.isRead) {
				unreadCount++;
			}
		}
		return unreadCount;
	}

	public clickThread()
	{
		Weave.getCallbacks(this).triggerCallbacks();
	}

	public receiveRawMessages()
	{
		Weave.getCallbacks(this).triggerCallbacks();
	}
}
Weave.registerClass(UnreadThreadStore, "ChatApp.store.UnreadThreadStore", null, "UnreadThreadStore");
export default Dispatcher.root.requestObject("unread_thread_store", UnreadThreadStore, true);