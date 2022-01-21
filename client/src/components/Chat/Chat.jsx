import React, {useEffect, useState} from "react";
import ChatInput from "../ChatInput/ChatInput";
import Messages from "../Messages/Messages";
import './Chat.scss'

function Chat(props) {
    return (
        <div className="chat">
            <Messages messages={props.messages} user={props.user} />
            <ChatInput setNewMessage={props.setNewMessage} newMessage={props.newMessage} handleSubmit={props.handleSubmit} />
        </div>
    );
}

export default Chat;