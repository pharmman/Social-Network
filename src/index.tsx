import * as serviceWorker from './serviceWorker';
import React from 'react';
import {addPost, changingValueForNewPost, state, StateType, subscribe} from './redux/state';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App appState={state} changingValueForNewPost={changingValueForNewPost} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree();
subscribe(rerenderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
