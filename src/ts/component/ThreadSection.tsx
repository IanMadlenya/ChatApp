import * as React from "react";
import {ThreadState} from "../Thread";
import ThreadStore from "../store/ThreadStore";
import UnreadThreadStore from "../store/UnreadThreadStore";
import ThreadListItem from "./ThreadListItem";

export interface ThreadSectionProps
{

}

export interface ThreadSectionState
{
	threads: ThreadState[];
	currentThreadID: string;
	unreadCount: number;
}

export class ThreadSection extends React.Component<ThreadSectionProps, ThreadSectionState>
{
	constructor(props:ThreadSectionProps)
	{
		super(props);
		this.state = ThreadSection.getStateFromStores();
	}

	static getStateFromStores()
	{
		return {
			threads: ThreadStore.getAllChrono(),
			currentThreadID: ThreadStore.getCurrentID(),
			unreadCount: UnreadThreadStore.getCount()
		}
	}

	private onChange=()=> {
		this.setState(ThreadSection.getStateFromStores());
	}

	componentDidMount() {
		ThreadStore.addChangeListener(this.onChange);
		UnreadThreadStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
		ThreadStore.removeChangeListener(this.onChange);
		UnreadThreadStore.removeChangeListener(this.onChange);
	}

	render()
	{
		var threadListItems = this.state.threads.map((thread:ThreadState, index:number) => {
			return (
				<ThreadListItem
					key={index}
					thread={thread}
					currentThreadID={this.state.currentThreadID}
				/>
			);
		}, this);
		var unread =
			this.state.unreadCount === 0 ?
				null :
				<span>Unread threads: {this.state.unreadCount}</span>;
		return (
			<div className="thread-section">
				<div className="thread-count">
					{unread}
				</div>
				<ul className="thread-list">
					{threadListItems}
				</ul>
			</div>
		);
	}
}