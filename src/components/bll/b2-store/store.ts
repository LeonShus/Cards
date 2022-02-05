import {applyMiddleware, combineReducers, createStore} from "redux";
import {loginReducer} from "../b1-reducers/r1-login/login-reduser";
import thunk from 'redux-thunk'
import {registrationReducer} from "../b1-reducers/r2-registration/registation-reducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

//@ts-ignore
window.store = store