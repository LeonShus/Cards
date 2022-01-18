import React from "react";
import "./App.css";
import SuperInputText from "./components/common/c1-SuperInputText/SuperInputText";
import SuperButton from "./components/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "./components/common/c3-SuperCheckbox/SuperCheckbox";

export const App = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperButton>
                Click
            </SuperButton>
            <SuperCheckbox/>
        </div>
    );
}
