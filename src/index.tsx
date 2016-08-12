import * as React from "react";
import * as ReactDOM from "react-dom";
import * as jQuery from "jquery";
import ChatWebAPIUtils from "./ts/util/ChatWebAPIUtils";
import * as ChatExampleData from "./ts/ChatExampleData";
import ChatApp from "./ts/component/ChatApp";

var $ = (jQuery as any).default;

$(function () {
	ChatExampleData.init();
	ChatWebAPIUtils.getAllMessages();
	ReactDOM.render(<ChatApp/>, document.getElementById("chat-app"));
});
