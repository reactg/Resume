import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return(
        <nav className={style.nav}>
                <button className={style.item}><a href='/RegistrationForm'>Welcome to registration</a></button>
        </nav>
    )
}

export default Navbar;