import React from "react"
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";

export const TestPage = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton>
                Click
            </SuperButton>
            <SuperCheckbox/>
        </div>
    )
}