import styles from './AboutMeItemForm.module.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, {ReactNode} from 'react';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type AboutMeItemPropsType = {
    icon: IconProp
    form: ReactNode,
    description:string
}


export const AboutMeItemForm:React.FC<AboutMeItemPropsType> = ({icon, form, description}) => {
    return (
        <li className={styles.aboutItem}>
            <span className={styles.icon}><FontAwesomeIcon icon={icon} size={'sm'}/></span>
            <span>{description} </span>
            {form}
        </li>
    )
}