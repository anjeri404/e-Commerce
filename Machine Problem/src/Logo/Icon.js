import React from 'react';
import webIcon from '../assets/webIcon.png';
import './Logo.css';

const icon = (props) => (
    <div className = "Icon">
        <img src= {webIcon} alt ="WebIcon"/>
    </div>
);

export default icon;