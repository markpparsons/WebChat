import React from 'react';
import logo from '../images/logo.png';

export default function Header() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Socket.IO WebChats</h2>
        </div>
    );
}