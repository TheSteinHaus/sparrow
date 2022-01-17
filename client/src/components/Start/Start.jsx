import React from 'react';
import './Start.css'
import { ReactComponent as Logo } from '../svg/vorobey.svg'
import { ReactComponent as Arrow } from '../svg/arrow.svg'
import { Link } from 'react-router-dom'

function StartComponent(props) {
    return (
        <div className='startContainer'>
            <p className='startHeader'>ДОБРО ПОЖАЛОВАТЬ</p>
            <p className='startText'>на новую соцсеть с интересным дизайном и случайным чатом</p>
            <Logo className='startLogo' />
            <p className='startRegisterText'>Нет аккаунта? Зарегистрируйтесь.</p>
            <div className='buttonContainer'>
            <Link to="/register"><button className='registerRedirect'>Зарегистрироваться</button> <Arrow className="arrowIcon" /></Link>
            </div>
            
            <p className='startLoginText'>А если есть, то тыкайте сюда.</p>
            <div className='buttonContainer'>
            <Link to="/login"><button className='loginRedirect'>Войти</button> <Arrow className="arrowIcon" /></Link>
            </div>
        </div>
    );
}

export default StartComponent;