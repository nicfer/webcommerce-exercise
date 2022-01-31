import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/slices/sessionSlice';
import { Link } from 'react-router-dom';

export function useLoggedIn() {
    const session = useSelector((state) => state.session.value);
    return session === 1;
}

export function LoginControl() {
    const dispatch = useDispatch();
    if (useLoggedIn()) return (
            <button className='btn btn-primary' onClick={() => dispatch(logout())}>Salir</button>
    ); else return (
        <Link to='/login'>
            <button className='btn btn-primary'>Ingresar</button>
        </Link>
    );
}