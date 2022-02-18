import React, {useEffect} from "react"
import styles from "./packs-list.module.scss"
import {Title} from "../../../common/c2-components/c5-Title/Title";
import {PackTable} from "./p1-list/pack-table";
import {Paginator} from "../../../common/c2-components/c10-paginator/paginator";
import {useDispatch, useSelector} from "react-redux";
import {setCardPacksTC, setNewPacksPage} from "../../bll/b1-reducers/r4-packs/packs-reducer";
import {Setting} from "./p2-setting-container/setting";
import {AppStateType} from "../../bll/b2-store/store";
import {PackSearch} from "./p3-pack-search/pack-search";


export const PacksList = () => {

    const dispatch = useDispatch()

    const currentPage = useSelector<AppStateType, number>(state => state.packs.settings.page)
    const packTotalCount = useSelector<AppStateType, number>(state => state.packs.cardPacksTotalCount)
    const pageCount = useSelector<AppStateType, number>(state => state.packs.settings.pageCount)

    console.log(currentPage)
    console.log(packTotalCount)


    useEffect(() => {
        dispatch(setCardPacksTC())
    }, [])

    const setPage = (page: number) => {
        dispatch(setNewPacksPage(page))
    }

    return (
        <div className={styles.container}>
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

                <div className={styles.paginatorContainer}>
                    <Paginator
                        currentPage={currentPage}
                        totalCount={packTotalCount}
                        pageCount={pageCount}
                        setPageCallback={setPage}
                    />
                </div>
            </div>
        </div>
    )
}

