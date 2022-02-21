import React, {ChangeEvent, ChangeEventHandler, useEffect, useState} from "react";
import {Title} from "../../../common/c2-components/c5-Title/Title";
import styles from "./learn-page.module.scss"
import {CustomButton} from "../../../common/c2-components/c2-CustomButton/CustomButton";
import {CustomCheckbox} from "../../../common/c2-components/c3-CustomCheckbox/CustomCheckbox";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {sendCardGradeT, setCardsToLearnT} from "../../bll/b1-reducers/r6-learnCards/learn-cards-reducer";
import {AppStateType} from "../../bll/b2-store/store";
import {Cards} from "../../bll/b1-reducers/r5-cards/cards-reducer";

const rateYourself = ["Did not Know", "Forgot", "A lot of Thought", "Confused", "Knew the answer"]


const getCard = (cards: Cards[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number }, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log("test: ", sum, rand, res)

    return cards[res.id + 1];
}

export const LearnCard = () => {

    const dispatch = useDispatch()
    const [showAnswer, setShowAnswer] = useState(false)
    const [first, setFirst] = useState<boolean>(true);
    const cards = useSelector<AppStateType, Cards[]>(state => state.learnCards.cards)
    const [checkedRate, setCheckedRate] = useState("")
    const {cardPackId} = useParams()


    const [card, setCard] = useState<Cards>({
        _id: "fake",
        cardsPack_id: "",
        user_id: "fake",
        answer: "answer fake",
        question: "question fake",
        grade: 0,
        shots: 0,
        type: "",
        rating: 0,
        created: "",
        updated: "",
        __v: 0
    });


    const answerReady = () => {
        setShowAnswer(true)
    }

    const changeCheckedAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        setCheckedRate(e.currentTarget.name)
    }

    const nextQuestion = () => {
        let grade = rateYourself.findIndex(el => el === checkedRate) + 1

        if (cards.length > 0 && grade) {
            dispatch(sendCardGradeT(grade, card._id))
            setCard(getCard(cards));
        } else {
            console.log("some error")
        }
        setShowAnswer(false)
    }


    useEffect(() => {
        if (first && cardPackId) {
            dispatch(setCardsToLearnT(cardPackId))
            setFirst(false)
        }

        if (cards.length > 0) setCard(getCard(cards))
    }, [dispatch, cardPackId, cards, first])


    const rateCheckBox = rateYourself.map((el, index) =>
        <CustomCheckbox
            key={index}
            name={el}
            checked={checkedRate === el}
            onChange={changeCheckedAnswer}
        >
            {el}
        </CustomCheckbox>)

    return (

        <div className={styles.container}>

            <Title text={`Learn`}/>

            <div className={styles.question}>
                <h4>
                    Question:
                </h4>
                <p>{card.question}</p>
            </div>

            {
                showAnswer &&
                <>
                    <div className={styles.question}>
                        <h4>
                            Answer:
                        </h4>
                        <p>{card.answer}</p>
                    </div>

                    <div className={styles.rate}>
                        <h4>
                            Rate yourself:
                        </h4>
                        <div className={styles.rateAnswer}>
                            {rateCheckBox}
                        </div>
                    </div>
                </>
            }

            {
                !showAnswer
                    ?
                    <CustomButton onClick={answerReady}>
                        Show Answer
                    </CustomButton>
                    :
                    <CustomButton onClick={nextQuestion}>
                        Next
                    </CustomButton>
            }

        </div>
    )
}