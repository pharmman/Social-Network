import React, {useState} from 'react';
import styles from './Header.module.scss'
import {HeaderContainerPropsType} from './HeaderContainer';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faSignInAlt, faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import ClickAwayListener from 'react-click-away-listener';

type HeaderPropsType = HeaderContainerPropsType

export function Header(props: HeaderPropsType) {
    const logOut = () => {
        props.logOutTC()
    }

    const [menuIsShowing, setShowMenu] = useState(false)

    const menuHandler = () => {
        setShowMenu(!menuIsShowing)
    }

    const handleClickAway = () => {
        if (menuIsShowing) {
            setShowMenu(false)
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.leftSide}>
                <div className={styles.burgerMenu}><FontAwesomeIcon onClick={logOut} icon={faBars} size={'lg'}/></div>
                <div className={styles.headerLogoContainer}>
                    <NavLink to={'/'}><img className={styles.headerLogo}
                                           src={logo}
                                           alt="logo"/></NavLink>
                </div>
            </div>
            <div className={styles.rightSide}>

                {props.isAuth
                    ?
                    <div className={styles.loginMenu}>
                        <div className={styles.loginButton}>
                            <FontAwesomeIcon onClick={logOut} icon={faSignOutAlt} size={'lg'}/>
                        </div>
                        <ClickAwayListener onClickAway={handleClickAway}>
                            <div className={styles.profileImgContainer}>
                                <img onClick={menuHandler} className={styles.profileImg} src={props.profilePhoto}
                                     alt={'Profile'}/>

                                <div className={menuIsShowing ? styles.profileMenuShow : styles.profileMenuHidden}>
                                    <div className={styles.profileMenuAvatar}>
                                        <NavLink to={`/profile/:${props.authorizedUserId}?`}>
                                            <img className={styles.profileMenuImg} src={props.profilePhoto}
                                                 alt={'Profile'}/>
                                        </NavLink>
                                    </div>
                                        <div className={styles.profileUserName}>
                                            {props.userName}
                                    </div>
                                </div>
                            </div>
                        </ClickAwayListener>
                    </div>
                    :
                    <div className={styles.loginButton}>
                        <NavLink to={'/login'}><FontAwesomeIcon icon={faSignInAlt} size={'lg'}/></NavLink>
                    </div>

                }
            </div>
        </header>

    )
}