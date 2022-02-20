import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Navigate, useParams} from "react-router-dom";
import {AppStateType} from "../../bll/b2-store/store";
import {Cards, createCardTC, setCards, setCardsTC} from "../../bll/b1-reducers/r5-cards/cards-reducer";
import {CardsList} from "./CardsList";
import styles from "./CardsPage.module.scss"
import {CardPagination} from "./Pagination/CardsPagination";
import {Button} from "@mui/material";
import {CustomInput} from "../../../common/c2-components/c1-CustomInput/CustomInput";
import {CustomButton} from "../../../common/c2-components/c2-CustomButton/CustomButton";
import {Preloader} from "../../../common/c2-components/c4-Preloader/Preloader";
// import SelectVariants from "./Select/CardsSelect";

export const CardsPage = () => {
    const dispatch = useDispatch()
    const pageCount = useSelector<AppStateType, number>((state) => state.cards.pageCount)
    const page = useSelector<AppStateType, number>((state) => state.cards.page)
    const cards = useSelector<AppStateType, Array<Cards>>((state) => state.cards.cards)
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.login.isLoggedIn)
    const userId = useSelector<AppStateType, string>((state) => state.login.userData._id)
    const packUserId = useSelector<AppStateType, string>((state) => state.cards.packUserId)
    const {id} = useParams()
    useEffect(() => {
        if (id) {
            dispatch(setCardsTC(id))
        }
        return () => {
            dispatch(setCards([],0,''))
        }
    }, [pageCount, page])

    const addCardBtn = () => {
        if (id) {
            dispatch(createCardTC(id, "How are you?", " i'm fine"))
        }
    }

    if (!isLoggedIn) {
        return <Navigate to={"/login"}/>
    }
    return (
        <div className={styles.cardsPage}>
            <h2>Pack name</h2>
            <div className={styles.block}>
                <div className={styles.searchBlock}>
                    <CustomInput/>
                    <CustomButton>
                        Search
                    </CustomButton>
                </div>
                {userId === packUserId ?
                    <CustomButton onClick={addCardBtn}>Add new card</CustomButton> : null}
            </div>
            {cards.length !== 0 ? <CardsList cards={cards}/> : <div>Not cards</div>}
            <CardPagination/>
            {/*<SelectVariants/>*/}
        </div>
    )
}
