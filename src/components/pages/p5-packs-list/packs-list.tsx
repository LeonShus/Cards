import React from "react"
import styles from "./packs-list.module.scss"
import {Title} from "../../../common/c2-components/c5-Title/Title";
import {PackTable} from "./p1-list/pack-table";
import {Setting} from "./p2-setting-container/setting";
import {PackSearch} from "./p3-pack-search/pack-search";
import {PackPaginator} from "./p4-packs-list-paginator/pack-paginator";
import {AddPack} from "./p6-add-pack/add-pack";


export const PacksList = () => {


    console.log("PackList")


    return (
        <div>
            <div className={styles.newPackContainer}>
                <AddPack/>
            </div>
            <div className={styles.packsContainer}>
                <div className={styles.filterContainer}>
                    <Setting/>
                </div>
                <div className={styles.listContainer}>
                    <div>
                        <Title text={"Packs List"}/>
                    </div>

                    <PackSearch/>

                    <div className={styles.tableContainer}>
                        <PackTable/>
                    </div>

                    <PackPaginator/>

                </div>
            </div>
        </div>

    )
}

