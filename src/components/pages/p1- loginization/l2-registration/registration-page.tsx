import React, {useEffect} from "react"
import styles from "./registration.module.scss"
import {useDispatch} from "react-redux";
import {testPing} from "../../../bll/b1-reducers/r2-registration/registation-reducer";

export const RegistrationPage = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(testPing())
    }, [])

    return (
        <div className={styles.container}>
            <h2>
                Sing Up
            </h2>

        </div>
    )
}