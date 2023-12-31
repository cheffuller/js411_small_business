import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Box, Button, Container, TextField } from '@mui/material';

export default function Login(props) {
  const [username, setUserName] = useState();
  const [cookies, setCookie] = useCookies();

  useEffect(() => {
    localStorage.setItem('username', JSON.stringify(username));
  }, [username]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCookie(username, { path: '/' })
    props.setUser(username);
  };

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
            label='Username'
            variant='standard'
            type='text'
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <TextField
            id='standard-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
            variant='standard'
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
            Login
          </Button>
        </div>
      </Box>
    </Container>
  );
}
