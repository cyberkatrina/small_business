import React from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@mui/material'
import { Link } from "react-router-dom";

const Listing = (props) => {
    return (
        <Container maxWidth="lg" className="car-container">
            {/* Change NAME to props.user.username */}
            <h4>Welcome</h4>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Address</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.businesses.map((business) => (
                    <TableRow key={business.id}>
                        <TableCell>
                          <Link to={`/details/${business.id}`}>{business.name}</Link>
                        </TableCell>
                        <TableCell>{business.description}</TableCell>
                        <TableCell>{business.hours}</TableCell>
                        <TableCell>{business.address}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Listing