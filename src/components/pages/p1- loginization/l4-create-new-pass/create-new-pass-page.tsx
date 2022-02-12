import React from "react"
import {Navigate, useParams} from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import styles from "../l2-registration/registration.module.scss";
import {Preloader} from "../../../../common/c2-components/c4-Preloader/Preloader";
import SuperInputText from "../../../../common/c2-components/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../common/c2-components/c2-SuperButton/SuperButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/b2-store/store";
import {setNewPassT} from "../../../bll/b1-reducers/r3-passwordRecovery/pass-recovery-reducer";

export const CreateNewPassPage = () => {

    const resetPasswordToken = useParams()
    const dispatch = useDispatch()
    const isFetching = useSelector<AppStateType, boolean>(state => state.app.isFetching)
    const isCreatedNewPass = useSelector<AppStateType, boolean>(state => state.passwordRecovery.isNewPassCreated)

    const formik = useFormik({
        initialValues: {
            password: "",
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Min length 8")
                .required("Required"),
        }),
        onSubmit: values => {
            console.log(values.password, resetPasswordToken.token)

            resetPasswordToken.token &&
            dispatch(setNewPassT(values.password, resetPasswordToken.token))
        }
    })

    if(isCreatedNewPass){
        return <Navigate to={"/login"}/>
    }
    return (
        <div className={styles.container}>
            <h2>
                Recovery password
            </h2>

            {isFetching && <Preloader/>}

            {/*Form and form errors*/}
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>

                <SuperInputText
                    type={"password"}
                    {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                    <div className={styles.error}>{formik.errors.password}</div>
                ) : null}


                <SuperButton
                    type={"submit"}
                    // disabled={isFetching}
                >
                    Register
                </SuperButton>
            </form>
        </div>
    )
}