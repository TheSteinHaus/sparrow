import React, { useContext, useState } from 'react';
import { ReactComponent as Arrow } from '../svg/arrow.svg'
import { Link } from 'react-router-dom';
import { Context } from '../..';
import './Login.scss'

function LoginComponent(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context)

    return (
        <div className='login'>
            <Link to="/start"><Arrow className='login__arrowBack' /></Link>
            <p className='login__title'><b>Вход</b></p>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)} placeholder='Почта' className='login__field' />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Пароль' className='login__field' />
            <Link to={'/main'}><button className='login__button' onClick={() => {store.login(email, password).then(store.isLoading = true).finally(store.isLoading = false)}} type='submit'>Войти</button></Link>
        </div>
    );
}

export default LoginComponent;