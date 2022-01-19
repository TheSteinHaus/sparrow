import React, { useContext, useState } from 'react';
import { ReactComponent as Arrow } from '../svg/arrow.svg'
import { Link } from 'react-router-dom';
import { Context } from '../..';
import './Registration.scss'

function RegistrationComponent(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [login, setLogin] = useState('')
    const { store } = useContext(Context)

    return (
        <div className='register'>
            <Link to="/start"><Arrow className='register__arrowBack' /></Link>
            <p className='register__title'><b>Регистрация</b></p>
            <input type='text' value={login} onChange={e => setLogin(e.target.value)} placeholder='Логин' className='login__field' />
            <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='Почта' className='login__field' />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' className='login__field' />
            <input type='password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder='Подтвердите пароль' className='login__field' />
            <button className='register__button' onClick={() => store.registration(login, email, password, confirmPassword)} type='submit'>Зарегистрироваться</button>
        </div>
    );
}

export default RegistrationComponent;
