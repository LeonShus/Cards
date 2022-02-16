import React from "react"
import styles from "./packs-list.module.scss"
import {RangeSlider} from "../../../common/c2-components/c9-slider/s1-range-slider";

export const PacksList = () => {
    return(
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <RangeSlider/>
            </div>
            <div className={styles.listContainer}>
                packList
            </div>
        </div>
    )
}