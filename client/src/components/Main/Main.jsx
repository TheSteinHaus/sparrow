import React from "react";
import Chat from "../Chat/Chat";
import Friends from "../Friends/Friends";
import Header from "../Header/Header";
import './Main.scss'

function Main(props) {
    return (
        <div className="main">
            <Header />
            <Friends />
            <Chat />
        </div>
    );
}

export default Main;