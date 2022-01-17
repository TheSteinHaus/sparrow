import React from "react";
import Friend from "../Friend/Friend";
import './Friends.scss'

function Friends(props) {
    return (
        <div className="friends">
            <Friend name="Alex Sensei" />
            <Friend name="Alex Sensei" />
            <Friend name="Alex Sensei" />
        </div>
    );
}

export default Friends;