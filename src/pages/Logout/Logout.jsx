import React, { useState, useEffect } from 'react';
import actionTypes from "../../store/actions/actionType"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { processLogout } from '../../store/actions/authAction';
import './Logout.css';

const Logout = () => {
    const currentUser = useSelector(state => state.auth.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = async () => {

        try {
            let res = await dispatch(processLogout(currentUser.username));

            if (res.type === actionTypes.LOGOUT_SUCCESS) {
                navigate('/login');
            }
        } catch (err) {
            
        }
    };

    return (

        <div style={{ "display": "flex" }}>
            <p>Welcome, {currentUser && currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Logout;
