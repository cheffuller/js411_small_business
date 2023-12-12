import React from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Listings(props) {
  return (
    <Container sx={{ marginTop: 5 }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Hours</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log(props)}
            {props.listings.map((listing) => (
              <TableRow
                key={listing.address}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {listing.name}
                </TableCell>
                <TableCell>{listing.description}</TableCell>
                <TableCell>{listing.hours}</TableCell>
                <TableCell>{listing.address}</TableCell>
                <TableCell><DeleteIcon color="warning" /></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
