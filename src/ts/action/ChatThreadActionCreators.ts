import ThreadStore from "../store/ThreadStore";
import UnreadThreadStore from "../store/UnreadThreadStore";

export default class ChatThreadActionCreators
{
	static clickThread(threadID:string)
	{
		ThreadStore.clickThread(threadID);
		UnreadThreadStore.clickThread();
	}
}
