import React from 'react';
import { useEffect, useState } from 'react';
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
  const [, forceRender] = useState(undefined);

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem('username'));
    if (username) {
      props.setUser(username);
    }
    const listings = JSON.parse(localStorage.getItem('listings'));
    if (listings) {
      props.setListings(listings)
    }
  }, []);

  const HideDelete = () => {
    if (props.user.username) {
      return <TableCell>Delete</TableCell>;
    }
  };

  const handleDeleteClick = (idx) => {
    props.deleteListing(idx)
    localStorage.setItem('listings', JSON.stringify(props.listings));
    forceRender((prev) => !prev);
  }

  const HideDeleteIcon = (idx) => {
    if (props.user.username) {
      return (
        <TableCell>
          <DeleteIcon color='warning' onClick={() => handleDeleteClick(idx)} />
        </TableCell>
      );
    }
  };

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
              <HideDelete />
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log(props)}
            {props.listings.map((listing, idx) => (
              <TableRow
                key={idx}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <a href={`/details/${idx}`}>{listing.name}</a>
                </TableCell>
                <TableCell>{listing.description}</TableCell>
                <TableCell>{listing.hours}</TableCell>
                <TableCell>{listing.address}</TableCell>
                <HideDeleteIcon idx={idx} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
