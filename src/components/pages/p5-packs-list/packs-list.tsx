import React, {useEffect} from "react"
import styles from "./packs-list.module.scss"
import {RangeSlider} from "../../../common/c2-components/c9-slider/s1-range-slider";
import {CustomButtonGroup} from "../../../common/c2-components/c2-CustomButton/c1-custom-button-group";
import {Title} from "../../../common/c2-components/c5-Title/Title";
import {CustomInput} from "../../../common/c2-components/c1-CustomInput/CustomInput";
import {CustomButton} from "../../../common/c2-components/c2-CustomButton/CustomButton";
import {PackTable} from "./p1-list/pack-table";
import {Paginator} from "../../../common/c2-components/c10-paginator/paginator";
import {useDispatch, useSelector} from "react-redux";
import {setCardPacksTC, setMaxCardsInPack} from "../../bll/b1-reducers/r4-packs/packs-reducer";
import {AppStateType} from "../../bll/b2-store/store";
import {Setting} from "./p2-setting-container/setting";

export const PacksList = () => {

    const dispatch =  useDispatch()


    useEffect(() => {
        dispatch(setCardPacksTC())
    },[])


    return(
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <Setting/>
            </div>
            <div className={styles.listContainer}>
                <div>
                    <Title text={"Packs List"}/>
                </div>
                <div className={styles.searchContainer}>
                    <CustomInput/>
                    <CustomButton>
                        Search
                    </CustomButton>
                </div>
                <div className={styles.tableContainer}>
                    <PackTable/>
                </div>
                <div className={styles.paginatorContainer}>
                    <Paginator/>
                </div>

            </div>
        </div>
    )
}

