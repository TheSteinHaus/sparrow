import React from "react";
import './Header.css'
import { ReactComponent as Vorobey } from '../svg/vorobey.svg'
import { ReactComponent as UserLogo } from '../../logo.svg'

function Header(props) {


    return (
        <div className="header">
            <button className={window.location.pathname === "/friends" ? "headerChats activeFriends" : "headerChats"}>Друзья</button>
            <Vorobey className="headerLogo" />
            <div className="headerProfile">
                <UserLogo className="headerUserLogo" />
                <button className="headerExit" type="submit">Выйти</button>
            </div>
        </div>
    );
}

export default Header;