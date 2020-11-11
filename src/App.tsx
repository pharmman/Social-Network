import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


const App: React.FC = () => {
    const dialogs = () => <DialogsContainer/>

    const profile = () => <Profile/>
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <div className={'app-inner'}>
                <Navbar/>
                <div className={'app-inner-content'}>
                    <Route path={'/dialogs'} render={dialogs}/>
                    <Route path={'/profile'}
                           render={profile}/>
                    <Route path={'/users'}
                           render={() => <UsersContainer/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;
