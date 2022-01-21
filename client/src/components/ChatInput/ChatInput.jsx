import React from "react";
import Friends from "../FriendList/FriendList";
import Header from "../Header/Header";
import { ReactComponent as Clip } from "../svg/clip.svg";
import { ReactComponent as Emoji } from "../svg/emoji.svg";
import { ReactComponent as ArrowSend } from "../svg/arrow_send.svg";
import './ChatInput.scss'

function ChatInput(props) {
    return (
        <div className="chatInput">
            <Clip className="chatInput__clip" />
            <input onChange={e => props.setNewMessage(e.target.value)} value={props.newMessage} type="text" placeholder="Напиши сообщение..." className="chatInput__field" />
            <Emoji className="chatInput__emoji" />
            <button onClick={props.handleSubmit} className="chatInput__buttonSend"><ArrowSend className="chatInput__arrowSend" /></button>
        </div>
    );
}

export default ChatInput;