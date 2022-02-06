import React from "react"
import {useFormik} from "formik";
import {Link, Navigate} from "react-router-dom";
import {passwordRecovery} from "../../../bll/b1-reducers/r3-passwordRecovery/pass-recovery-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/b2-store/store";
import style from "./passwordRecovery.module.scss"
import styles from "../l2-registration/registration.module.scss";
import SuperInputText from "../../../../common/c2-components/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../common/c2-components/c2-SuperButton/SuperButton";
import {Preloader} from "../../../../common/c2-components/c4-Preloader/Preloader";

export const PassRecoveryPage = () => {
    const dispatch = useDispatch()
    const isToggleError = useSelector<AppStateType, boolean>((state) => state.passwordRecovery.isToggleError)
    const isFetching = useSelector<AppStateType, boolean>(state => state.app.isFetching)
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: values => {
            let {email} = values
            dispatch(passwordRecovery(email))
        }
    })

    if (isToggleError) {
        return <Navigate to={"/login"}/>
    }

    return (
        <div className={style.forgotPage}>
            {isFetching && <Preloader/>}
            <div className={style.formContainer}>

                <h3 className={style.title}>Forgot your password?</h3>

                <form onSubmit={formik.handleSubmit} className={styles.form}>
                    <SuperInputText
                        type={"text"}
                        {...formik.getFieldProps("email")}
                    />
                    <p className={style.emailText}>Enter your email address and we will send you further instructions </p>
                    <SuperButton
                        type={"submit"}
                        disabled={isFetching}
                    >
                        Send Instructions
                    </SuperButton>
                    <p className={style.text}>Did you remember your password?</p>
                    <Link to="/login">Try logging in</Link>
                </form>
            </div>
        </div>
    )
}