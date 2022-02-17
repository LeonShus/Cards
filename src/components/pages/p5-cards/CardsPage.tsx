import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {AppStateType} from "../../bll/b2-store/store";
import {Cards, createCardTC, setCardsTC} from "../../bll/b1-reducers/r5-cards/cards-reducer";
import {CardsList} from "./CardsList";
import styles from './CardsPage.module.scss'


export const CardsPage = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppStateType, Array<Cards>>((state) => state.cards.cards)
    const isAuthorized = useSelector<AppStateType, boolean>(state => state.login.isLoggedIn)
    const {id} = useParams()
    useEffect(() => {
        if (isAuthorized) {
            if (id) {
                dispatch(setCardsTC(id))
            }
        }
    }, [isAuthorized])

    const addCardBtn = () => {
        if (id) {
            dispatch(createCardTC(id, 'How are you?', ' i\'m fine'))
        }
    }
    return (
        <div>
            <h2>Pack name</h2>
            <div className={styles.block}>
                <input type="text"/>
                <button onClick={addCardBtn}>Add new card</button>
            </div>
            {cards.length !== 0 ? <CardsList cards={cards}/> : <div>Not cards</div>}
        </div>
    )
}
