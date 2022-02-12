import React from "react"
import {CustomInput} from "../../../common/c2-components/c1-CustomInput/CustomInput";
import SuperButton from "../../../common/c2-components/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../../common/c2-components/c3-SuperCheckbox/SuperCheckbox";

export const TestPage = () => {
    return (
        <div>
            <CustomInput/>
            <SuperButton>
                Click
            </SuperButton>
            <SuperCheckbox/>
        </div>
    )
}