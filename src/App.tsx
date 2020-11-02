import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {ActionsType} from './redux/store';
import {Store} from 'redux';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: Store
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    const dialogs = () => <DialogsContainer state={state.dialogsPage} dispatch={props.store.dispatch}/>

    const profile = () => <Profile dispatch={props.store.dispatch} state={state.profilePage}/>
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <div className={'app-inner'}>
                <Navbar/>
                <div className={'app-inner-content'}>
                    <Route path={'/dialogs'} render={dialogs}/>
                    <Route path={'/profile'}
                           render={profile}/>
                </div>
            </div>
        </div>
    );
}

export default App;
