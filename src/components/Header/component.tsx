import React from 'react';
import logo from '../../logo.svg';
import { isLoggedIn } from '../../pages/Auth/helper'
import { logout } from '../../pages/Auth/slice';
import { showToaster } from '../../slices/toaster.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ThemeSwitch } from './ThemeSwitch';
import AppHeader from './styled';
import Button from '../Button';
import { selectUserName } from '../../pages/Auth/slice/selectors';

function Header() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const name = useSelector(selectUserName);

    const logoutSession = async () => {
        await dispatch<any>(logout());
        await dispatch(showToaster({ message: 'Signed out successfully!', type: 'success', autoHideDuration: 5000 }))
        navigate('/');
    }
    return <AppHeader>
        <div className="App-title">
            <img src={logo} className="App-logo" alt="logo" />
            <p> React Boilerplate </p>
        </div>
        <div className='flex align-center'>
            <ThemeSwitch />
            {isLoggedIn() && <>Hi {name}<Button variant="contained" title="Logout" onClick={logoutSession} /></>}
        </div>
    </AppHeader>;
}

export default Header;
