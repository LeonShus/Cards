import React, {useEffect} from "react"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {CustomButton} from "../../../../common/c2-components/c2-CustomButton/CustomButton";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../../bll/b2-store/store";
import {CardPacks, setCardPacksTC} from "../../../bll/b1-reducers/r4-packs/packs-reducer";
import {EditModalWindow} from "../p7-edit-modal-window/edit-modal-window";


export const PackTable = () => {

    const dispatch = useDispatch()
    const currentPage = useSelector<AppStateType, number>(state => state.packs.settings.page)



    useEffect(() => {
        dispatch(setCardPacksTC())
    }, [currentPage])


    const userId = useSelector<AppStateType>(state => state.login.userData._id)


    const packs = useSelector<AppStateType, CardPacks[]>(state => state.packs.cardPacks)

    const tableBody = packs.map(row => (
        <TableRow
            key={row._id}
            sx={{"&:last-child td, &:last-child th": {border: 0}}}
        >
            <TableCell component="th" scope="row">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.cardsCount}</TableCell>
            <TableCell align="right">{row.updated}</TableCell>
            <TableCell align="right">{row.user_name}</TableCell>
            {userId === row.user_id
                ?
                <TableCell align="right" sx={{display: "flex"}}>
                    <CustomButton>learn</CustomButton>
                    <CustomButton>delete</CustomButton>
                    <CustomButton>edit</CustomButton>

                </TableCell>
                :
                <TableCell align="right">
                    <CustomButton>learn</CustomButton>
                </TableCell>
            }

        </TableRow>
    ))

    return (
        <div>
            <EditModalWindow/>

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Cards</TableCell>
                            <TableCell>Last Update</TableCell>
                            <TableCell>Created By</TableCell>
                            <TableCell>Actions</TableCell>
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