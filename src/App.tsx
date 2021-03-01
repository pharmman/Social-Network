import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Route, withRouter, Switch, Redirect} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {getAuthUserData} from './redux/auth-reducer';
import {StateType} from './redux/redux-store';
import {initializeApp} from './redux/app-reducer';
import {Preloader} from './components/common/Preloader/Preloader';
import {compose} from 'redux';
import {withSuspense} from './hoc/ComponentWithSuspense';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const DialogsContainer = React.lazy(() => import ('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import ('./components/Profile/ProfileContainer'));

type MapStateToPropsType = {
    initialization: boolean
}

type MapDispatchToPropsType = {
    getAuthUserData: () => void
    initializeApp: () => void
}

type AppPropsType = MapStateToPropsType & MapDispatchToPropsType

export const mapStateToProps = (state: StateType) => {
    return {
        initialization: state.app.initialization
    }
}


class App extends React.Component<AppPropsType, StateType> {

    componentDidMount() {
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
                        <Switch>
                            <Route exact path={'/'} render={() => <Redirect to={'/login'}/>}/>
                            <Route exact path={'/Social-Network'} render={() => <Redirect to={'/login'}/>}/>
                            <Route path={'/dialogs'} render={withSuspense(DialogsContainer)}/>
                            <Route path={'/profile/:userId?'}
                                   render={withSuspense(ProfileContainer)}/>
                            <Route path={'/users'}
                                   render={withSuspense(UsersContainer)}/>
                            <Route path={'/login'}
                                   render={() => <Login/>}/>
                            <Route path={'*'} render={() => <Redirect to={'/404'}/>}/>
                            <Route path={'404'} render={() => <h1>Page not found</h1>}/>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}

export default compose<React.ComponentType>(withRouter, connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
    getAuthUserData,
    initializeApp
}))(App);
