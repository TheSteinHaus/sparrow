import React from "react";
import Message from "../Message/Message";
import './Messages.scss'

function Messages(props) {
    return (
        <div className="messages">
            <Message messageText="Привет" time="17:00" />
            <Message messageText="Привет :)" time="17:01" isMe={true} />
            <Message messageText="Как дела?" time="17:01" />
            <Message messageText="Нормально, дз Богдана делаю((" time="17:02" isMe={true} />
            <Message messageText="Хехе" time="17:02" />
            <Message messageText="Понимаю..." time="17:03" />
            <Message messageText="Да-да..." time="17:04" isMe={true} />
        </div>
    );
}

export default Messages;