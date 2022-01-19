import React from "react";
import ChatInput from "../ChatInput/ChatInput";
import Friends from "../Friends/Friends";
import Header from "../Header/Header";
import './Chat.scss'

function Chat(props) {
    return (
        <div className="chat">
            <ChatInput />
        </div>
    );
}

export default Chat;