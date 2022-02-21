import {Cards} from "../r5-cards/cards-reducer";
import {Dispatch} from "redux";
import {cardsApi} from "../../../../dal/cardsApi";


const initState = {
    cards: [] as Cards[],
}

type LearnCardsReducerInitType = typeof initState
type LearnCardsActionType = SetCardsToLearnAT

export const learnCardsReducer = (state: LearnCardsReducerInitType = initState, action: LearnCardsActionType) => {
    switch (action.type){
        case "LEARN-CARDS-REDUCER/SET-CARDS-TO-LEARN":
            return {
                ...state,
                cards: action.cards
            }
        default:
            return state
    }
}

type SetCardsToLearnAT = ReturnType<typeof setCardsToLearnAC>
const setCardsToLearnAC = (cards: Cards[]) => {
    return{
        type: "LEARN-CARDS-REDUCER/SET-CARDS-TO-LEARN",
        cards
    } as const
}

//THUNK

export const setCardsToLearnT = (cardsPackId: string) => async (dispatch: Dispatch) => {
    try{
        const res = await cardsApi.getCards(cardsPackId, 100, 1)

        dispatch(setCardsToLearnAC(res.data.cards))

    } catch (e) {

    }
}

export const sendCardGradeT = (grade: number, cardId: string) => async (dispatch: Dispatch) => {
    try {
        const res = await cardsApi.updateGrade(grade, cardId)

        console.log(res)
    } catch (e){

    }
}
