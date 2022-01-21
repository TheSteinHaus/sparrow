import React from "react";
import { format } from 'timeago.js'
import './Message.scss'

function Message({message, own}) {
    return (
        <div className={own === true ? "message message_me" : "message"}>
            <p className="message__text">{message.text}</p>
            <p className="message__time">{format(message.createdAt)}</p>
        </div>
    );
}

export default Message;