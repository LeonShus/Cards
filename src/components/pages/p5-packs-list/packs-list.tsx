import React, {useEffect} from "react"
import styles from "./packs-list.module.scss"
import {Title} from "../../../common/c2-components/c5-Title/Title";
import {CustomInput} from "../../../common/c2-components/c1-CustomInput/CustomInput";
import {CustomButton} from "../../../common/c2-components/c2-CustomButton/CustomButton";
import {PackTable} from "./p1-list/pack-table";
import {Paginator} from "../../../common/c2-components/c10-paginator/paginator";
import {useDispatch} from "react-redux";
import {setCardPacksTC} from "../../bll/b1-reducers/r4-packs/packs-reducer";
import {Setting} from "./p2-setting-container/setting";

export const PacksList = () => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(setCardPacksTC())
    }, [])


    return (
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

