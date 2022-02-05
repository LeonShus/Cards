import {Dispatch} from "redux";
import {authApi} from "../../../../dal/cardsApi";


const initState = {}

export const registrationReducer = (state: any = initState, action: any) => {
    switch (action.type) {
        default:
            return state
    }
}


//THUNK

export const testPing = () => (dispatch: Dispatch) => {
    authApi.ping()
        .then(res => {
            console.log(res)
        })
}