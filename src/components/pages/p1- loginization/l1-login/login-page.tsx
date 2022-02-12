import React from "react"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/b2-store/store";
import {useFormik} from "formik";
import {loginTC} from "../../../bll/b1-reducers/r1-login/login-reduser";
import {CustomInput} from "../../../../common/c2-components/c1-CustomInput/CustomInput";
import SuperCheckbox from "../../../../common/c2-components/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../../../../common/c2-components/c2-SuperButton/SuperButton";
import {Preloader} from "../../../../common/c2-components/c4-Preloader/Preloader";
import {Navigate} from "react-router-dom";
import styles from "./login-page.module.scss";
import * as Yup from "yup";
import {Title} from "../../../../common/c2-components/c5-Title/Title";

export const LoginPage = () => {
    const isLoggedIn = useSelector<AppStateType, boolean>((state => state.login.isLoggedIn))
    const loginError = useSelector<AppStateType, string>((state => state.login.error))
    const isFetching = useSelector<AppStateType, boolean>(state => state.app.isFetching)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            remember: false
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            password: Yup.string()
                .required("Required"),
        }),
        onSubmit: (values) => {
            let {email, password, remember} = values
            dispatch(loginTC(email, password, remember))
        },
    });

    if (isLoggedIn) {
        return <Navigate to={"/profile"}/>
    }
    return (
        <div className={styles.container}>

            <Title text={"Sing In"}/>

            {isFetching && <Preloader/>}

            <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
                <CustomInput
                    type={"email"}
                    placeholder={"Email"}
                    labelText={"email"}
                    errorMessage={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
                    {...formik.getFieldProps("email")}

                />
                <CustomInput
                    type={"password"}
                    placeholder={"Password"}
                    labelText={"password"}
                    {...formik.getFieldProps("password")}
                    errorMessage={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
                />
                <SuperCheckbox
                    type={"remember"}
                    {...formik.getFieldProps("remember")}
                > Remember</SuperCheckbox>
                <SuperButton type="submit">Login</SuperButton>
            </form>
            {loginError && <div>{loginError}</div>}
        </div>
    )
}