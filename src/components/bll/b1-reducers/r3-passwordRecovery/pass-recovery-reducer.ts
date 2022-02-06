import {Dispatch} from "redux";
import {authApi} from "../../../../dal/cardsApi";

const initState = {
    error: '',
    isToggleError: false
}
type InitStateType = typeof initState;


export const passwordRecoveryReducer = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case "PASSWORD-RECOVERY-REDUCER/SET-ERROR":
            return {
                ...state,
                error: action.error
            }
        case "PASSWORD-RECOVERY-REDUCER/IS-TOGGLE-ERROR":
            return {
                ...state,
                isToggleError: action.isToggleError
            }
        default:
            return state
    }
}
const setErrorAC = (error: string) => ({type: "PASSWORD-RECOVERY-REDUCER/SET-ERROR", error} as const)
const isToggleErrorAC = (isToggleError: boolean) => ({
    type: "PASSWORD-RECOVERY-REDUCER/IS-TOGGLE-ERROR",
    isToggleError
} as const)


export const passwordRecovery = (email: string) => async (dispatch: Dispatch) => {
    try {
        let res = authApi.passwordRecovery(email)
        dispatch(isToggleErrorAC(true))
    } catch (err: any) {
        dispatch(isToggleErrorAC(err.response.data.error))
    }

}

type setErrorACType = ReturnType<typeof setErrorAC>
type isToggleErrorACType = ReturnType<typeof isToggleErrorAC>

type ActionType = setErrorACType | isToggleErrorACType
