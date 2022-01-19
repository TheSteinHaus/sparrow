import React from "react";
import ChatInput from "../ChatInput/ChatInput";
import Friends from "../FriendList/FriendList";
import Header from "../Header/Header";
import Messages from "../Messages/Messages";
import './Chat.scss'

function Chat(props) {
    return (
        <div className="chat">
            <Messages />
            <ChatInput />
        </div>
    );
}

export default Chat;