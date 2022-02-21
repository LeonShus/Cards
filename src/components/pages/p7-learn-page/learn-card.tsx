import React, {useEffect, useState} from "react";
import {Title} from "../../../common/c2-components/c5-Title/Title";
import styles from "./learn-page.module.scss"
import {CustomButton} from "../../../common/c2-components/c2-CustomButton/CustomButton";
import {CustomCheckbox} from "../../../common/c2-components/c3-CustomCheckbox/CustomCheckbox";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setCardsTC} from "../../bll/b1-reducers/r5-cards/cards-reducer";

const rateYourself = ["Did not Know", "Forgot", "A lot of Thought", "Confused", "Knew the answer"]

export const LearnCard = () => {

    const dispatch = useDispatch()
    const [showAnswer, setShowAnswer] = useState(false)
    const {cardId} = useParams()


    console.log(cardId)

    const answerReady = () => {
        setShowAnswer(true)
    }

    useEffect(() => {
        if(cardId){
            dispatch(setCardsTC(cardId))
        }
    })


    const rateCheckBox = rateYourself.map(el =>
        <CustomCheckbox>
            {el}
        </CustomCheckbox>)

    return (
        <div className={styles.container}>
            <Title text={`Learn`}/>

            <div className={styles.question}>
                <h4>
                    Question:
                </h4>
                <p>lalalalala</p>
            </div>

            {
                showAnswer &&
                <>
                    <div className={styles.question}>
                        <h4>
                            Answer:
                        </h4>
                        <p>lalalalala</p>
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
                    <CustomButton>
                        Next
                    </CustomButton>
            }


        </div>
    )
}