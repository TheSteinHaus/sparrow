import React from "react";
import './Friend.scss'

function Friend(props) {
    return (
        <div className="friend">
            <div className="friend__wrapper">
                <div className="friend__avatar"><img src="./img/test_img.png" alt="" /></div>
                <div className="friend__name">{props.name}</div>
            </div>
            <div className="friend__arrow"><img src="./img/arrow.svg" alt="" /></div>
        </div>
    );
}

export default Friend;