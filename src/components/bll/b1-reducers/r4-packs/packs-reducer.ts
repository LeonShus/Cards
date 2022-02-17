import {Dispatch} from "redux";
import {cardPacksApi} from "../../../../dal/cardsApi";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../b2-store/store";


const initState = {
    cardPacks: [{}],
    settings: {
        maxCardsCount: 9999,
        minCardsCount: 0,
        page: 1,
        pageCount: 4,
        sortPacks: '0updated'
    },
    cardPacksTotalCount: 3,
}
type CardPacks = {
    _id: string
    user_id: string
    name: string
    path?: string
    cardsCount: number
    grade?: number
    shots?: number
    rating?: number
    type?: string
    created: string
    updated: string
    __v?: number
}
type InitStateType = typeof initState
type PacksActionType = setMinCardsInPackAT
    | setMaxCardsInPackAT
    | setCardPacksAT
export const packsReducer = (state: InitStateType = initState, action: PacksActionType): InitStateType => {
    switch (action.type) {
        case "PACKS-REDUCER/SET-MIN-CARDS-IN-PACK":
            return {
                ...state, settings: {...state.settings, minCardsCount: action.min}
            }
        case "PACKS-REDUCER/SET-MAX-CARDS-IN-PACK":
            return {
                ...state, settings: {...state.settings, minCardsCount: action.max}
            }
        case "PACKS-REDUCER/SET-CARD-PACKS":
            return {
                ...state, cardPacks: action.cards
            }
        default:
            return state
    }
}

type setMinCardsInPackAT = ReturnType<typeof setMinCardsInPack>
export const setMinCardsInPack = (min: number) => {
    return {
        type: "PACKS-REDUCER/SET-MIN-CARDS-IN-PACK",
        min,
    } as const
}

type setMaxCardsInPackAT = ReturnType<typeof setMaxCardsInPack>
export const setMaxCardsInPack = (max: number) => {
    return {
        type: "PACKS-REDUCER/SET-MAX-CARDS-IN-PACK",
        max,
    } as const
}

type setCardPacksAT = ReturnType<typeof setCardPacks>
export const setCardPacks = (cards: Array<CardPacks>) => {
    return {
        type: "PACKS-REDUCER/SET-CARD-PACKS",
        cards,
    } as const
}

export const setCardPacksTC = (userId: string, min: number, max: number, sortPacks: string, page: number, pageCount: number) =>
    (dispatch: Dispatch) => {
        cardPacksApi.getCardPacks(userId, min, max, sortPacks, page, pageCount)
            .then((res) => {
                    dispatch(setCardPacks(res.data.cardPacks))
                }
            )
    }

type  ThunkType = ThunkAction<void, AppStateType, unknown, PacksActionType>
export const createPackTC = (name: string, deckCover: string = '', privat: boolean): ThunkType =>
    (dispatch, getState) => {
        cardPacksApi.createCardsPack(name, deckCover, privat)
            .then(() => {
                const state = getState()
                const userId = state.login.userData._id
                const settings = state.packs.settings
                const {minCardsCount, maxCardsCount, page, pageCount,sortPacks} = settings
                dispatch(setCardPacksTC(userId, minCardsCount, maxCardsCount, sortPacks, page, pageCount))
            })
    }
export const deletePackTC = (packId: string): ThunkType =>
    (dispatch, getState) => {
        cardPacksApi.deleteCardsPack(packId)
            .then(() => {
                const state = getState()
                const userId = state.login.userData._id
                const settings = state.packs.settings
                const {minCardsCount, maxCardsCount, page, pageCount,sortPacks} = settings
                dispatch(setCardPacksTC(userId, minCardsCount, maxCardsCount, sortPacks, page, pageCount))
            })
    }
export const changePackTC = (packId: string, name: string): ThunkType =>
    (dispatch, getState) => {
        cardPacksApi.changeCardsPack(packId, name)
            .then(() => {
                const state = getState()
                const userId = state.login.userData._id
                const settings = state.packs.settings
                const {minCardsCount, maxCardsCount, page, pageCount, sortPacks} = settings
                dispatch(setCardPacksTC(userId, minCardsCount, maxCardsCount, sortPacks, page, pageCount))
            })
    }
