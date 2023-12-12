// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Dashboard(props) {

  const IsUser = () => {
    console.log(props.user.username)
    if (props.user.username) {
      return (
        <Button color='inherit' sx={{ textTransform: 'none' }} onClick={() => props.setUser(null)}>
          Logout
        </Button>
      );
    } else {
      return (
        <Button href='/login' color='inherit' sx={{ textTransform: 'none' }}>
          Login
        </Button>
      );
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={{ backgroundColor: 'seagreen' }}>
          <Typography>Austin Small Business</Typography>
          <Button
            href='/listings'
            color='inherit'
            sx={{ marginLeft: 'auto', textTransform: 'none' }}
          >
            Listings
          </Button>
          <IsUser user={props.user.username} />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
