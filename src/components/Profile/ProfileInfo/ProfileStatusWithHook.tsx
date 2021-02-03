import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    propsStatus: string
    updateProfileStatus: (status: string) => void
}

type LocalStateType = {
    editMode: boolean,
    status: string
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

    return (
        <div>
            {editMode ?
                <input onChange={onchangeHandler} value={status} autoFocus={true}
                       onBlur={deActivateEditMod}/>
                :
                <span onDoubleClick={activateEditMod}>{propsStatus}</span>}
        </div>
    )
}