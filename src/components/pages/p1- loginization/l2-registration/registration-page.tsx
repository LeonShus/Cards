import React, {useEffect} from "react"
import styles from "./registration.module.scss"
import {useDispatch} from "react-redux";
import {testPing} from "../../../bll/b1-reducers/r2-registration/registation-reducer";
import {useFormik} from "formik";
import * as Yup from "yup";
import SuperInputText from "../../../../common/c2-components/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../common/c2-components/c2-SuperButton/SuperButton";

export const RegistrationPage = () => {

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(testPing())
    }, [])

    const formik = useFormik({
        initialValues: {
            email: "",
            pass: "",
            passConfirm: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            pass: Yup.string()
                .min(7, "Min length 7")
                .required("Required"),
            passConfirm: Yup.string()
                .oneOf([Yup.ref("pass"), null], "Passwords must match"),
        }),
        onSubmit: values => {
            console.log(values)
        }
    })

    return (
        <div className={styles.container}>
            <h2>
                Sing Up
            </h2>
            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                <SuperInputText
                    type={"text"}
                    {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                    <div className={styles.error}>{formik.errors.email}</div>
                ) : null}

                <SuperInputText
                    type={"password"}
                    {...formik.getFieldProps("pass")}
                />
                {formik.touched.pass && formik.errors.pass ? (
                    <div className={styles.error}>{formik.errors.pass}</div>
                ) : null}

                <SuperInputText
                    type={"password"}
                    {...formik.getFieldProps("passConfirm")}
                />
                {formik.touched.passConfirm && formik.errors.passConfirm ? (
                    <div className={styles.error}>{formik.errors.passConfirm}</div>
                ) : null}

                <SuperButton type={"submit"}>
                    Register
                </SuperButton>
            </form>
        </div>
    )
}