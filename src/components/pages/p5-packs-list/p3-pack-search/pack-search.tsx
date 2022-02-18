import React from "react"
import styles from "./pack-search.module.scss";
import {CustomInput} from "../../../../common/c2-components/c1-CustomInput/CustomInput";
import {CustomButton} from "../../../../common/c2-components/c2-CustomButton/CustomButton";

export const PackSearch = () => {
    return (
        <div className={styles.searchContainer}>
            <CustomInput/>
            <CustomButton>
                Search
            </CustomButton>
        </div>
    )
}