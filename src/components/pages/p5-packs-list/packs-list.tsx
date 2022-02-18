import React, {useState} from "react"
import styles from "./packs-list.module.scss"
import {Title} from "../../../common/c2-components/c5-Title/Title";
import {PackTable} from "./p1-list/pack-table";
import {Setting} from "./p2-setting-container/setting";
import {PackSearch} from "./p3-pack-search/pack-search";
import {PackPaginator} from "./p4-packs-list-paginator/pack-paginator";
import {AddPack} from "./p6-add-pack/add-pack";


export const PacksList = () => {

    const [addPack, setAddPack] = useState(false)

    console.log("PackList")
    const openAddPack = () => {
        setAddPack(true)
    }
    const closeAddPack = () => {
        setAddPack(false)
    }

    return (
        <div>

            {addPack && <AddPack closeModal={closeAddPack}/>}

            <div className={styles.packsContainer}>
                <div className={styles.filterContainer}>
                    <Setting/>
                </div>
                <div className={styles.listContainer}>

                    <div>
                        <Title text={"Packs List"}/>
                    </div>

                    <PackSearch openCreteWindow={openAddPack}/>

                    <div className={styles.tableContainer}>
                        <PackTable/>
                    </div>

                    <PackPaginator/>

                </div>
            </div>
        </div>

    )
}

