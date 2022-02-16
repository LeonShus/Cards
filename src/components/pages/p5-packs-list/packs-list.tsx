import React from "react"
import styles from "./packs-list.module.scss"
import {RangeSlider} from "../../../common/c2-components/c9-slider/s1-range-slider";
import {CustomButtonGroup} from "../../../common/c2-components/c2-CustomButton/c1-custom-button-group";

export const PacksList = () => {

    const minRange = 10
    const maxRange = 100

    return(
        <div className={styles.container}>
            <div className={styles.filterContainer}>

                <div className={styles.showContainer}>
                    <h5>Number of cards</h5>
                    <CustomButtonGroup buttonsName={["My", "All"]}/>
                </div>

                <div className={styles.sliderContainer}>
                    <h5>Number of cards</h5>
                    <RangeSlider minMax={[minRange, maxRange]}/>
                </div>

            </div>
            <div className={styles.listContainer}>
                packList
            </div>
        </div>
    )
}