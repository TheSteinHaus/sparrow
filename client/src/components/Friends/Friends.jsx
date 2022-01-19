import React from "react";
import Chat from "../Chat/Chat";
import FriendList from "../FriendList/FriendList";
import Header from "../Header/Header";
import './Friends.scss'

function Friends(props) {
    return (
        <div className="friends">
            <Header />
            <div className="friends__container">
                <FriendList />
                <Chat />
            </div>
        </div>
    );
}

export default Friends;