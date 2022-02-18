import React from "react"
import {Title} from "../../../../common/c2-components/c5-Title/Title"
import styles from "./edit-modal-window.module.scss"
import {CustomInput} from "../../../../common/c2-components/c1-CustomInput/CustomInput";
import {CustomButton} from "../../../../common/c2-components/c2-CustomButton/CustomButton";
import {withModalWindow} from "../../../../common/c3-hoc/h1-modal-window/modal-window";


export const EditModalWindow = withModalWindow(() => {
    return (
        <div>
            <div className={styles.modalContainer}>
                <Title text={"Edit"}/>
                <CustomInput
                    labelText={"new name"}
                    placeholder={"name"}
                />
                <div className={styles.btnContainer}>
                    <CustomButton>
                        change
                    </CustomButton>
                    <CustomButton>
                        close
                    </CustomButton>
                </div>
            </div>
        </div>
    )
})