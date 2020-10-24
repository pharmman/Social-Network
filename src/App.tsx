import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Route} from 'react-router-dom';
import {StoreType} from './redux/state';

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    const dialogs = () => <Dialogs message={state.dialogsPage.messages}
                                   dialogs={state.dialogsPage.dialogs}/>

    const profile = () => <Profile messageForNewPost={state.profilePage.messageForNewPost}
                                   posts={state.profilePage.posts} addPost={props.store.addPost.bind(props.store)}
                                   changingValueForNewPost={props.store.changingValueForNewPost.bind(props.store)}/>
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
