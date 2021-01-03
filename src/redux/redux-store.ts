import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';
import {usersReducer} from './users-reducer';
import {authReducer} from './auth-reducer';
import thunk from 'redux-thunk';

export type StateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
} as const);


export const store:Store = createStore(reducers, applyMiddleware(thunk))

// @ts-ignore
window.store = store