import React from 'react';
import { ReactComponent as Logo } from '../svg/vorobey.svg'
import { ReactComponent as Arrow } from '../svg/arrow.svg'
import { Link } from 'react-router-dom'
import './Start.scss'

function StartComponent(props) {
    return (
        <div className='start'>
            <p className='start__title'>ДОБРО ПОЖАЛОВАТЬ</p>
            <p className='start__text'>на новую соцсеть с интересным дизайном и случайным чатом</p>
            <Logo className='start__logo' />
            <p className='start__textRegister'>Нет аккаунта? Зарегистрируйтесь.</p>
            <div className='start__buttonContainer'>
                <Link to="/register"><button className='start__redirect'>Зарегистрироваться</button> <Arrow className="start__arrowIcon" /></Link>
            </div>
            <p className='start__textLogin'>А если есть, то тыкайте сюда.</p>
            <div className='start__buttonContainer'>
                <Link to="/login"><button className='start__redirect'>Войти</button> <Arrow className="start__arrowIcon" /></Link>
            </div>
        </div>
    );
}

export default StartComponent;