import React from "react";
import axios from "axios";
import logo from '../svg/vorobey.svg'
import arrow from '../svg/arrow.svg'
import './Friend.scss'

const api = axios.create({
    baseURL: `http://localhost:5000/api`
})

function Friend(props) {
    const handleClick = async () => {
        try {
            const res = await api.get(`/conversation/find/${props.userId}/${props.friendId}`)
            console.log(res.data)
            props.setFriendId(props.friendId)
            props.setCurrentChat(res.data)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="friend" onClick={() => {handleClick()}}>
            <div className="friend__wrapper">
                <div className="friend__avatar"><img src={logo} alt="" /></div>
                <div className="friend__name">{props.login}</div>
            </div>
            <div className="friend__arrow"><img src={arrow} alt="" /></div>
        </div>
    );
}

export default Friend;