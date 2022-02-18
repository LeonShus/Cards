import React, {useState} from "react"
import styles from "./add-pack.module.scss"
import {CustomInput} from "../../../../common/c2-components/c1-CustomInput/CustomInput";
import {CustomButton} from "../../../../common/c2-components/c2-CustomButton/CustomButton";
import {Title} from "../../../../common/c2-components/c5-Title/Title";
import {useDispatch} from "react-redux";
import {createPackTC} from "../../../bll/b1-reducers/r4-packs/packs-reducer";

export const AddPack = () => {

    const [name, setName] = useState("")

    const dispatch = useDispatch()

    const changeName = (value: string) => {
        setName(value)
    }

    const createPack = () => {
        dispatch(createPackTC(name, "", false))
    }

    return(
        <div className={styles.container}>
            <Title text={"Create Pack"}/>

            <div className={styles.contentContainer}>
                <CustomInput
                    labelText={'name'}
                    onChangeText={changeName}
                />
                <CustomButton onClick={createPack}>
                    Create
                </CustomButton>
            </div>
        </div>

    )
}