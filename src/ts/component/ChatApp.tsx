import * as React from "react";
import {ThreadSection} from "./ThreadSection";
import MessageSection from "./MessageSection";

export interface AppProps
{

}

export interface AppState
{

}

export default class ChatApp extends React.Component<AppProps, AppState>
{
	render()
	{
		return (
			<div className="chatapp">
				<ThreadSection/>
				<MessageSection/>
			</div>
		);
	}
}