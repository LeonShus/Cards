import {Cards} from "../r5-cards/cards-reducer";


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


