import React from "react";
import {Cards, changeCardTC, deleteCardTC} from "../../bll/b1-reducers/r5-cards/cards-reducer";
import styles from "./CardsList.module.scss";
import {Preloader} from "../../../common/c2-components/c4-Preloader/Preloader";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {CustomButton} from "../../../common/c2-components/c2-CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../bll/b2-store/store";

type PropsType = {
    cards: Array<Cards>
}

export const CardsList = (props: PropsType) => {
    const userId = useSelector<AppStateType, string>((state) => state.login.userData._id)

    const dispatch = useDispatch()

    const deleteCardBtn = (id: string) => {
        dispatch(deleteCardTC(id))
    }
    const updateCardBtn = (id: string) => {
        dispatch(changeCardTC(id, 'new', 'new'))
    }
    const tableBody = props.cards.map(el => (
        <TableRow
            key={el._id}
            sx={{"&:last-child td, &:last-child th": {border: 0}}}
        >
            <TableCell component="th" scope="row">
                {el.question}
            </TableCell>
            <TableCell align="left">{el.answer}</TableCell>
            <TableCell align="left">{el.updated.slice(0, 10).split('-').reverse().join('.')}</TableCell>
            <TableCell align="left">{el.rating}</TableCell>

            {userId === el.user_id
                ?
                <TableCell align="right" sx={{display: "flex"}}>
                    <CustomButton onClick={() => deleteCardBtn(el._id)}>Delete</CustomButton>
                    <CustomButton onClick={() => updateCardBtn(el._id)}>Edit</CustomButton>

                </TableCell>
                :
                null
            }

        </TableRow>
    ))
    return (
        <div className={styles.container}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Question</TableCell>
                            <TableCell>Answer</TableCell>
                            <TableCell>Last Updated</TableCell>
                            <TableCell>Grade</TableCell>
                            {userId === props.cards[0].user_id && <TableCell>Actions</TableCell>}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableBody}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}