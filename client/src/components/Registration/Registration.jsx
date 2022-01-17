import React, { useContext, useState } from 'react';
import './Registration.css'
import { ReactComponent as Arrow } from '../svg/arrow.svg'
import { Link } from 'react-router-dom';
import { Context } from '../..';

function RegistrationComponent(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [login, setLogin] = useState('')
    const {store} = useContext(Context)

    return (
        <div className='registerContainer'>
            <Link to="/start"><Arrow className='arrowLogReg' /></Link>
            <p className='headerLogReg'><b>Регистрация</b></p>
            <input type='text' value={login} onChange={e => setLogin(e.target.value)} placeholder='Логин' className='loginField' />
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='Почта' className='loginField' />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' className='loginField' />
            <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Подтвердите пароль' className='loginField' />
            <button className='registerButton' onClick={() => store.registration(login, email, password, confirmPassword)} type='submit'>Зарегистрироваться</button>
        </div>
    );
}

export default RegistrationComponent;