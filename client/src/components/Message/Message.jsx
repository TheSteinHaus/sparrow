import React from "react";
import './Message.scss'

function Message(props) {
    return (
        <div className={props.isMe === true ? "message message_me" : "message"}>
            <p className="message__text">{props.messageText}</p>
            <p className="message__time">{props.time}</p>
        </div>
    );
}

export default Message;