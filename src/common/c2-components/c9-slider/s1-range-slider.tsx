import React from "react"
import styles from "./s1-range-slider.module.scss"
import Slider from "@mui/material/Slider";

export const RangeSlider = () => {
    return(
        <div className={styles.container}>
            <Slider />
        </div>
    )
}