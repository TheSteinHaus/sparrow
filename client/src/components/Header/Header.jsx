import React, { useContext, useEffect } from "react";
import { Context } from '../..';
import { store } from "../..";
import { ReactComponent as Vorobey } from '../svg/vorobey.svg'
import { ReactComponent as UserLogo } from '../../logo.svg'
import './Header.scss'
import { Link } from "react-router-dom";

function Header(props) {
    const {store} = useContext(Context)

    return (
        <div className="header">
            <Link to={'/friends'}><button className={window.location.pathname === "/friends" ? "header__chats header__chats_activeFriends" : "header__chats"}>Друзья</button></Link>
            <Link to={'/main'}><Vorobey className="header__logo" /></Link>
            <div className="header__profile">
                <p className="header__nickname">{props.user}</p>
                <UserLogo className="header__userlogo" />
                <Link to={'/start'}><button className="header__exit" onClick={() => {store.logout().then(window.history.replaceState(null, null, "/start"))}} type="submit">Выйти</button></Link>
            </div>
        </div>
    );
}

export default Header;