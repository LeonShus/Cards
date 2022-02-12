import React from "react";
import {Navigation} from "../c7-Navigation/Navigation";
import styles from "./Header.module.scss"

export const Header = () => {
    return (
        <div className={styles.container}>
            <Navigation/>
        </div>
    )
}