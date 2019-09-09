import React from 'react';
import logo from '../assets/logo.png';

const NavBar = (props) => {
  return (
    <div className="nav-bar">
        <img alt="logo" className="logo" src={logo}/>
        <h1 id="site-title">{props.siteTitle}</h1>
    </div>
  );
}

export default NavBar;