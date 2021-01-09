import React from 'react';
import {StateType} from '../../../redux/redux-store';

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, StateType> {

    state = {
        editMode:false
    }

    activateEditMod = () => {
        this.state.editMode = true;
        this.forceUpdate()
    }

    deActivateEditMod = () => {
        this.state.editMode = false;
        this.forceUpdate()
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <input defaultValue={'input'} autoFocus={true} onBlur={this.deActivateEditMod}/>
                    :
                    <span onDoubleClick={this.activateEditMod}>span</span>}
            </div>
        )
    }
}