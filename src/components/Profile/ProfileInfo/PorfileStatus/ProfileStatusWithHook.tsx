import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './ProfileStatus.module.scss'

type ProfileStatusPropsType = {
    propsStatus: string
    updateProfileStatus: (status: string) => void
}


export const ProfileStatusWithHooks: React.FC<ProfileStatusPropsType> = ({propsStatus, updateProfileStatus}) => {

    useEffect(() => {
        setStatus(propsStatus)
    }, [propsStatus])

    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(propsStatus)

    const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deActivateEditMod = () => {
        updateProfileStatus(status)
        setEditMode(false)
    }

    const activateEditMod = () => {
        setEditMode(true)
    }

    const clearStatus = () => {
        setStatus('')
    }

    return (
        <div className={styles.profileStatus}>
            {editMode ?
                <input placeholder={'Add...'} className={styles.form} onFocus={clearStatus} onChange={onchangeHandler} value={status} autoFocus={true}
                       onBlur={deActivateEditMod}/>
                :
                <p className={styles.data} onDoubleClick={activateEditMod}>{propsStatus}</p>}
        </div>
    )
}