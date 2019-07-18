import React from 'react';
import loginLogo from '../assets/loginLogo.png';
import './Logo.css';

const logo = (props) => (
    <div className = "Logo">
        <img src= {loginLogo} alt ="LogIn"/>
    </div>
)
export default logo;