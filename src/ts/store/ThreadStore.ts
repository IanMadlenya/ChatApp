import * as weavejs from "weavejs";
import {Weave} from "weavejs";
import ChatMessageUtils from "../util/ChatMessageUtils";

import WeaveStore = weavejs.flux.WeaveStore;
import LinkableHashMap = weavejs.core.LinkableHashMap;
import LinkableString = weavejs.core.LinkableString;
import Thread from "../Thread";
import {RawMessageState} from "../Message";
import AbstractStore from "./AbstractStore";
import Dispatcher from "../dispatcher/Dispatcher";

class ThreadStore extends AbstractStore
{

	private currentID = Weave.linkableChild(this, LinkableString);
	private threads = Weave.linkableChild(this, new LinkableHashMap(Thread));

	/** private functions **/
	private init(rawMessages:RawMessageState[])
	{
		rawMessages.forEach((message) => {
			var threadID = message.threadID;
			var thread = this.threads.requestObject(threadID, Thread);

			if(thread.value.lastMessage.date > new Date(message.timestamp))
				return;

			thread.value = {
				id: threadID,
				name: message.threadName,
				lastMessage: ChatMessageUtils.convertRawMessage(message, this.currentID.value)
			};
		});

		if (!this.currentID.value) {
			var allChrono = this.getAllChrono();
			this.currentID.value = allChrono[allChrono.length - 1].id;
		}

		(this.threads.getObject(this.currentID.value) as Thread).lastMessage.isRead.value = true;
	}

	/** state functions **/

	/**
	 * @param {string} id
	 */
	public get(id:string) {
		var thread = this.threads.getObject(id) as Thread;
		return thread ? thread.value : null;
	}

	public getAll()
	{
		return (this.threads.getNames()).map((id:string) => {
			return this.get(id);
		});
	}

	public getAllChrono()
	{
		var orderedThreads = this.getAll();

		orderedThreads.sort(function(a, b) {
			if (a.lastMessage.date < b.lastMessage.date) {
				return -1;
			} else if (a.lastMessage.date > b.lastMessage.date) {
				return 1;
			}
			return 0;
		});
		return orderedThreads;
	}

	public getCurrentID() {
		return this.currentID.value;
	}

	public getCurrent() {
		return this.get(this.getCurrentID());
	}

	/** action functions **/
	public clickThread(threadID:string)
	{
		var thread = this.threads.getObject(threadID) as Thread;
		thread.lastMessage.isRead.value = true;
	}

	public receiveRawMessages(rawMessages:RawMessageState[])
	{
		this.init(rawMessages);
	}
}
Weave.registerClass(ThreadStore, "ChatApp.store.ThreadStore", null, "ThreadStore");
export default Dispatcher.root.requestObject("thread_store", ThreadStore, true);