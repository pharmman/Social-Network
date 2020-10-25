import React from 'react';
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom';


export function Navbar() {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbar__item}>
                <NavLink to={'/profile'} activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.navbar__item}>
                <NavLink to={'/dialogs'} activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.navbar__item}>
                <a href={'/dialogs'}>News</a>
            </div>
            <div className={classes.navbar__item}>
                <a href={'/dialogs'}>Music</a>
            </div>
            <div className={classes.navbar__item}>
                <a href={'/dialogs'}>Settings</a>
            </div>
        </nav>
    )
}