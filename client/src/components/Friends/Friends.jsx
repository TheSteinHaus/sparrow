import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../..";
import Chat from "../Chat/Chat";
import FriendList from "../FriendList/FriendList";
import Header from "../Header/Header";
import './Friends.scss'

function Friends(props) {
    return (
        <div className="friends">
            <Header user={props.user.login} />
            <div className="friends__container">
                <FriendList user={props.user} setCurrentChat={props.setCurrentChat} friends={props.friends} setFriendId={props.setFriendId} />
                <Chat setNewMessage={props.setNewMessage} newMessage={props.newMessage} handleSubmit={props.handleSubmit} messages={props.messages} user={props.user} />
            </div>
        </div>
    );
}

export default Friends;