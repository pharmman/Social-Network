import React from 'react';
import classes from './Header.module.css'

export function Header () {
    return (
        <header className={classes.header}>
            <img className={classes.header__logo} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/The_social_network.svg/1280px-The_social_network.svg.png" alt="logo"/>
        </header>
    )
}