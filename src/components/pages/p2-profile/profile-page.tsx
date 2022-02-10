import React from "react"
import {useSelector} from "react-redux";
import {AppStateType} from "../../bll/b2-store/store";

export const ProfilePage = () => {

    const userName = useSelector<AppStateType, string>(state => state.login.userData.name)

    return(
        <div>
            ProfilePage
            <div>
                {userName}
            </div>
        </div>
    )
}