import * as React from "react";
import MessageStore from "../store/MessageStore";
import ThreadStore from "../store/ThreadStore";
import {MessageState} from "../Message";
import {ThreadState} from "../Thread";
import MessageComposer from "./MessageComposer";
import MessageListItem from "./MessageListItem";

export interface MessageSectionProps
{
}

export interface MessageSectionState
{
	messages: MessageState[];
	thread: ThreadState;
	currentID: string;
}

export default class MessageSection extends React.Component<MessageSectionProps, MessageSectionState>
{
	ul:HTMLUListElement;

	constructor(props:MessageSectionProps)
	{
		super(props);
		this.state = MessageSection.getStateFromStores();
	}

	private static getStateFromStores() {
		return {
			messages: MessageStore.getAllForCurrentThread(),
			thread: ThreadStore.getCurrent(),
			currentID: ThreadStore.getCurrentID()
		};
	}

	private static getMessageListItem(message:MessageState, index:number) {
		return (
			<MessageListItem
				key={index}
				message={message}
			/>
		);
	}

	componentDidMount() {
		this.scrollToBottom();
		MessageStore.addChangeListener(this.onChange);
		ThreadStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
		MessageStore.removeChangeListener(this.onChange);
		ThreadStore.removeChangeListener(this.onChange);
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	private scrollToBottom() {
		this.ul.scrollTop = this.ul.scrollHeight;
	}

	private onChange=()=> {
		this.setState(MessageSection.getStateFromStores());
	}

	render()
	{
		var messageListItems = this.state.messages.map(MessageSection.getMessageListItem);
		var name = this.state.thread && this.state.thread.name;
		return (
			<div className="message-section">
				<h3 className="message-thread-heading">{name}</h3>
				<ul className="message-list" ref={(e:HTMLUListElement) => this.ul = e}>
					{messageListItems}
				</ul>
				<MessageComposer threadID={this.state.currentID}/>
			</div>
		);
	}
}