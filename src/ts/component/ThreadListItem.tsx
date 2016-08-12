import * as React from "react";
import classNames from "classnames";
import {ThreadState} from "../Thread";
import ChatThreadActionCreators from "../action/ChatThreadActionCreators";

export interface ThreadListItemProps
{
	thread:ThreadState;
	currentThreadID:string;
}

export interface ThreadListItemState
{
}

export default class ThreadListItem extends React.Component<ThreadListItemProps, ThreadListItemState>
{
	private onClick=()=> {
		ChatThreadActionCreators.clickThread(this.props.thread.id);
	}

	render()
	{
		var thread = this.props.thread;
		var lastMessage = thread.lastMessage;
		return (
			<li
				className={classNames({
					'thread-list-item': true,
					'active': thread.id === this.props.currentThreadID
				})}
				onClick={this.onClick}>
				<h5 className="thread-name">{thread.name}</h5>
				<div className="thread-time">
					{lastMessage.date.toLocaleTimeString()}
				</div>
				<div className="thread-last-message">
					{lastMessage.text}
				</div>
			</li>
		);
	}
}