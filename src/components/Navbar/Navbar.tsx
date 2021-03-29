import React from 'react';
import classes from './Navbar.module.scss'
import {Link} from './Link/Link';
import {
    faCog,
    faEnvelope,
    faIdCard,
    faMusic,
    faNewspaper,
    faSignInAlt,
    faUsers
} from '@fortawesome/free-solid-svg-icons';


export function Navbar() {
    return (
        <nav className={classes.navbar}>
            <ul>
                <Link linkName={'Profile'} link={'/profile'} icon={faIdCard}/>
                <Link linkName={'Messages'} link={'/dialogs'} icon={faEnvelope}/>
                <Link linkName={'News'} link={'/news'} icon={faNewspaper}/>
                <Link linkName={'Music'} link={'/music'} icon={faMusic}/>
                <Link linkName={'Settings'} link={'/settings'} icon={faCog}/>
                <Link linkName={'Users'} link={'/users'} icon={faUsers}/>
                <Link linkName={'Login'} link={'/login'} icon={faSignInAlt}/>
            </ul>
        </nav>
    )
}