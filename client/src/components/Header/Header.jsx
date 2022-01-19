import React from "react";
import { ReactComponent as Vorobey } from '../svg/vorobey.svg'
import { ReactComponent as UserLogo } from '../../logo.svg'
import './Header.scss'

function Header(props) {


    return (
        <div className="header">
            <button className={window.location.pathname === "/friends" ? "header__chats header__chats_activeFriends" : "header__chats"}>Друзья</button>
            <Vorobey className="header__logo" />
            <div className="header__profile">
                <UserLogo className="header__userlogo" />
                <button className="header__exit" type="submit">Выйти</button>
            </div>
        </div>
    );
}

export default Header;