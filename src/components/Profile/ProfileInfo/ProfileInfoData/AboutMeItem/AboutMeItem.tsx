import styles from '../PorfileInfoData.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type AboutMeItemPropsType = {
    icon: IconProp
    description: string
}


export const AboutMeItem:React.FC<AboutMeItemPropsType> = ({icon, description}) => {
    return (
        <li className={styles.aboutItem}>
            <span><FontAwesomeIcon icon={icon} size={'sm'}/></span>
            <span>{description}</span> </li>
    )
}