import {applyMiddleware, combineReducers, compose, createStore, Store} from 'redux';
import {profileReducer, ProfileReducerActionsType} from './profile-reducer';
import {dialogsReducer, DialogsReducerActionsType} from './dialogs-reducer';
import {usersReducer, UsersReducerActionsType} from './users-reducer';
import {authReducer, AuthReducerActionsType} from './auth-reducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'
import {appReducer, AppReducerActionsType} from './app-reducer';

export type ActionsType =
    ProfileReducerActionsType
    | AppReducerActionsType
    | AuthReducerActionsType
    | DialogsReducerActionsType
    | UsersReducerActionsType
export type ThunkType = ThunkAction<void, StateType, unknown, ActionsType>
export type StateType = ReturnType<typeof reducers>;

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
} as const);

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store:Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

// @ts-ignore
window.store = store
