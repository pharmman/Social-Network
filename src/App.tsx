import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import { Route } from 'react-router-dom';
import {StateType} from './redux/state';

type AppPropsType = {
    appState: StateType
}

function App(props:AppPropsType) {
  return (
    <div className={'app-wrapper'}>
      <Header/>
      <div className={'app-inner'}>
          <Navbar/>
          <div className={'app-inner-content'}>
              <Route path={'/dialogs'} render={ () => <Dialogs/>}/>
              <Route path={'/profile'} render={ () => <Profile posts={props.appState.profilePage.posts}/>}/>
          </div>
      </div>
    </div>
  );
}

export default App;
