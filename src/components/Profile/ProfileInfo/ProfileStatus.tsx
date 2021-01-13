import React, {ChangeEvent} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateProfileStatus: (status: string) => void
}

type LocalStateType = {
    editMode: boolean,
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType, LocalStateType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<LocalStateType>) {

        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activateEditMod = () => {
        console.log(this)
        this.setState({
            editMode: true
        })
    }

    deActivateEditMod = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateProfileStatus(this.state.status)
    }

    onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode ?
                    <input onChange={this.onchangeHandler} value={this.state.status} autoFocus={true}
                           onBlur={this.deActivateEditMod}/>
                    :
                    <span onDoubleClick={this.activateEditMod}>{this.props.status}</span>}
            </div>
        )
    }
}