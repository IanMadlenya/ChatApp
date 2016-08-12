import * as React from "react";
import ChatMessageActionCreators from "../action/ChatMessageActionCreators";

export interface MessageComposerProps
{
	threadID:string;
}

export interface MessageComposerState
{
	text:string;
}

export default class MessageComposer extends React.Component<MessageComposerProps, MessageComposerState>
{
	constructor(props:MessageComposerProps)
	{
		super(props);
		this.state = {
			text: ''
		};
	}

	private onChange=(event:React.FormEvent)=>
	{
		this.setState({text: (event.target as HTMLTextAreaElement).value});
	}

	private onKeyDown=(event:React.KeyboardEvent)=>
	{
		if (event.keyCode === weavejs.util.KeyboardUtils.KEYCODES.ENTER)
		{
			event.preventDefault();
			var text = this.state.text.trim();
			if (text)
			{
				ChatMessageActionCreators.createMessage(text, this.props.threadID);
			}
			this.setState({text: ''});
		}
	}

	render() {
		return (
			<textarea
				className="message-composer"
				name="message"
				value={this.state.text}
				onChange={this.onChange}
				onKeyDown={this.onKeyDown}
			/>
		);
	}
}
