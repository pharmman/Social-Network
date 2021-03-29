import styles from './Link.module.scss';
import {NavLink} from 'react-router-dom';
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {IconProp} from '@fortawesome/fontawesome-svg-core';


type LinkPropsType = {
    linkName: string
    link: string
    icon: IconProp
}

export const Link: React.FC<LinkPropsType> = ({linkName, link, icon}) => {
    return (
        <li className={styles.link}>
            <NavLink to={link} activeClassName={styles.activeLink}>
                <FontAwesomeIcon icon={icon} size={'lg'}/>
                <span>{linkName}</span>
            </NavLink>
        </li>
    )
}