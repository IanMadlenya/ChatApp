import * as React from "react";
import {MessageState} from "../Message";

export interface MessageListItemProps
{
	message:MessageState
}

export interface MessageListItemState
{

}

export default class MessageListItem extends React.Component<MessageListItemProps, MessageListItemState>
{

	render()
	{
		var message = this.props.message;
		return (
			<li className="message-list-item">
				<h5 className="message-author-name">{message.authorName}</h5>
				<div className="message-time">
					{message.date.toLocaleTimeString()}
				</div>
				<div className="message-text">{message.text}</div>
			</li>
		);
	}
}