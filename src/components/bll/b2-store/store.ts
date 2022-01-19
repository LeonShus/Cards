import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "../b1-reducers/r1-login/login-reduser";
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    login: loginReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store