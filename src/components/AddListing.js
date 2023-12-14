import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Box, Button, Container, TextField } from '@mui/material';

export default function AddListing(props) {
  const [listName, setListName] = useState();
  const [listDesc, setListDesc] = useState();
  const [listHours, setListHours] = useState();
  const [listAddress, setListAddress] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    const newListing = { name: listName, description: listDesc, hours: listHours, address: listAddress}
    props.addListing(newListing)
    localStorage.setItem('listings', JSON.stringify(props.listings));
    navigate('/listings')
};

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem('username'));
    if (username) {
      props.setUser(username);
    }
    
  }, []);

  return (
    <Container sx={{ marginTop: 5, textAlign: 'center' }}>
      <Box
        component='form'
        sx={{ '& .MuiTextField-root': { width: '40%' } }}
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit}
      >
        <div>
          <TextField
            label='Name'
            variant='standard'
            type='text'
            onChange={(e) => setListName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label='Hours'
            variant='standard'
            type='text'
            onChange={(e) => setListHours(e.target.value)}
          />
        </div>
        <div>
          <TextField
            label='Address'
            variant='standard'
            type='text'
            onChange={(e) => setListAddress(e.target.value)}
          />
        </div>
        <div >
          <TextField
            label='Description'
            variant='outlined'
            type='text'
            multiline
            rows={4}
            sx={{margin: 3}}
            onChange={(e) => setListDesc(e.target.value)}
          />
        </div>
        <div>
          <Button
            type='submit'
            variant='contained'
            sx={{
              backgroundColor: 'lightgrey',
              color: 'black',
              width: '40%',
              marginTop: 3,
              '&:hover': {
                backgroundColor: 'darkgrey',
              },
            }}
          >
            Add Listing
          </Button>
        </div>
      </Box>
    </Container>
  );
}
