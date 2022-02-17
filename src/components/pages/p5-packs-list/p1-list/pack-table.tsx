import React from "react"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {CustomButton} from "../../../../common/c2-components/c2-CustomButton/CustomButton";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../bll/b2-store/store";
import {CardPacks} from "../../../bll/b1-reducers/r4-packs/packs-reducer";


export const PackTable = () => {

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
            <TableCell align="right">
                <CustomButton>del</CustomButton>
            </TableCell>
        </TableRow>
    ))

    return (
        <div>
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