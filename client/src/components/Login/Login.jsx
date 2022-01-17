import React, { useContext, useState } from 'react';
import './Login.css'
import { ReactComponent as Arrow } from '../svg/arrow.svg'
import { Link } from 'react-router-dom';
import { Context } from '../..';

function LoginComponent(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {store} = useContext(Context)

    return (
        <div className='loginContainer'>
            <Link to="/start"><Arrow className='arrowLogReg' /></Link>
            <p className='headerLogReg'><b>Вход</b></p>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Почта' className='loginField' />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' className='loginField' />
            <button className='loginButton' onClick={() => store.login(email, password)} type='submit'>Войти</button>
        </div>
    );
}

export default LoginComponent;