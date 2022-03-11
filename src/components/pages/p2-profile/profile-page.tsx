import React from "react"
import {useSelector} from "react-redux";
import {Navigate} from "react-router-dom";
import {AppStateType} from "../../bll/b2-store/store";
import styles from "./profile.module.scss"
import defaultAvatar from "../../../common/c4-img/userDefaultAvatar.png"

export const ProfilePage = () => {
    const userName = useSelector<AppStateType, string>(state => state.login.userData.name)
    const isLoggedIn = useSelector<AppStateType, boolean>((state => state.login.isLoggedIn))

    if (!isLoggedIn) {
        return <Navigate to={"/login"}/>
    }
    return (
        <div className={styles.container}>
            <img src={defaultAvatar} alt="avatar"/>
            <div className={styles.userInfo}>
                {userName}
            </div>
        </div>
    )
}