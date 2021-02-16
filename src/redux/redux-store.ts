import {applyMiddleware, combineReducers, compose, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer} from './app-reducer';

export type StateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
} as const);


// export const store:Store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store:Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
// @ts-ignore
window.store = store