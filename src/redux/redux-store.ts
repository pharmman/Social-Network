import {combineReducers, createStore, Store} from 'redux';
import {profileReducer} from './profile-reducer';
import {dialogsReducer} from './dialogs-reducer';

export type StateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
});


export const store:Store = createStore(reducers)