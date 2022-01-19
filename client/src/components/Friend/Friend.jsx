import React from "react";
import logo from '../svg/vorobey.svg'
import arrow from '../svg/arrow.svg'
import './Friend.scss'

function Friend(props) {
    return (
        <div className="friend">
            <div className="friend__wrapper">
                <div className="friend__avatar"><img src={logo} alt="" /></div>
                <div className="friend__name">{props.name}</div>
            </div>
            <div className="friend__arrow"><img src={arrow} alt="" /></div>
        </div>
    );
}

export default Friend;