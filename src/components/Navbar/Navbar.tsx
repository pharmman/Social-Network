import React from 'react';
import classes from './Navbar.module.css'


export function Navbar () {
    return (
        <nav className={classes.navbar}>
            <div className={classes.navbar__item}>
                <a>Profile</a>
            </div>
            <div className={classes.navbar__item}>
                <a>Messages</a>
            </div>
            <div className={classes.navbar__item}>
                <a>News</a>
            </div>
            <div className={classes.navbar__item}>
                <a>Music</a>
            </div>
            <div className={classes.navbar__item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}