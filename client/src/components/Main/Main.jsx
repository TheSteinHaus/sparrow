import React from "react";
import { store } from "../..";
import Header from "../Header/Header";
import { ReactComponent as Logo } from '../svg/vorobey.svg'
import './Main.scss'

function Main(props) {
    return (
        <div className="main">
            <Header user={props.user.login} />
            <div className="main__greetings">
                <p>Добро пожаловать на наш сайт!</p>
                <p>Если тебе не с кем пообщаться, то просто жми на кнопку ниже. Мы найдём тебе случайного человека, с которым можно будет пообщаться.</p>
                <p>Желаем найти хорошего собеседника!</p>
            </div>
            <div className="main__buttonLogo">
                <Logo className="main__sparrow" />
            </div>
        </div>
    );
}

export default Main;