import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import {connect} from 'react-redux';
import {getAuthUserData} from './redux/auth-reducer';
import {StateType} from './redux/redux-store';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {compose} from 'redux';

type MapStateToPropsType = {
    initialization: boolean
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    initializeApp: () => void
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

export const mapStateToProps = (state:StateType) => {
    return {
        initialization: state.app.initialization
    }
}


class App extends React.Component<AppPropsType, StateType> {

    componentDidMount() {
        debugger
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialization) {
            return <Preloader/>
        }
        return (
            <div className={'app-wrapper'}>
                <HeaderContainer/>
                <div className={'app-inner'}>
                    <Navbar/>
                    <div className={'app-inner-content'}>
                        <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
                        <Route path={'/profile/:userId?'}
                               render={() => <ProfileContainer/>}/>
                        <Route path={'/users'}
                               render={() => <UsersContainer/>}/>
                        <Route path={'/login'}
                               render={() => <Login/>}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose<React.ComponentType>(withRouter, connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {getAuthUserData, initializeApp }))(App);
