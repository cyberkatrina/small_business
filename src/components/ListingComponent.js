import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography
} from '@mui/material'
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete'
import cookie from "cookie";

const checkAuth = () => {
  let cookies = cookie.parse(document.cookie)
  return cookies["loggedIn"] ? true : false
}

const Listing = (props) => {
    return (
        <Container maxWidth="lg" className="table-container">
            <Table>
                <TableHead>
                <TableRow>
        <TableCell>
            <Typography component="span" fontWeight="bold" color='grey'>
                Name
            </Typography>
        </TableCell>
        <TableCell>
            <Typography component="span" fontWeight="bold" color='grey'>
                Description
            </Typography>
        </TableCell>
        <TableCell>
            <Typography component="span" fontWeight="bold" color='grey'>
                Hours
            </Typography>
        </TableCell>
        <TableCell>
            <Typography component="span" fontWeight="bold" color='grey'>
                Address
            </Typography>
        </TableCell>
        {checkAuth() && (
            <TableCell>
                <Typography component="span" fontWeight="bold" color='grey'>
                    Delete
                </Typography>
            </TableCell>
        )}
    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((business, idx) => (
                    <TableRow key={business.id}>
                        <TableCell>
                          <Link to={`/details/${business.id}`}>{business.name}</Link>
                        </TableCell>
                        <TableCell>{business.description}</TableCell>
                        <TableCell>{business.hours}</TableCell>
                        <TableCell>{business.address}</TableCell>
                        {checkAuth() ? 
                        <TableCell>
                            <DeleteIcon
                                onClick={() => props.removeItem(idx)}
                                className="icon text-red" />
                        </TableCell> 
                        : <span></span>}
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing