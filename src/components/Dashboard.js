import { useNavigate } from 'react-router';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import listings from '../redux/listings';

export default function Dashboard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/add');
  };

  const handleLogout = () => {
    props.setUser(null);
    localStorage.clear();
    props.setListings(listings.listings);
  };

  const IsUser = () => {
    if (props.user.username) {
      return (
        <div>
          <Button
            color='inherit'
            sx={{ textTransform: 'none' }}
            onClick={handleClick}
          >
            Add Listing
          </Button>
          <Button
            color='inherit'
            sx={{ textTransform: 'none' }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      );
    } else {
      return (
        <Button href='/login' color='inherit' sx={{ textTransform: 'none' }}>
          Login
        </Button>
      );
    }
  };

  const UserBar = () => {
    if (props.user.username) {
      return (
        <AppBar position='static' sx={{ height: '20px', backgroundColor: 'green', color: 'white', textAlign: 'center'}}>
          <Typography>Hello {props.user.username}, you are logged in.</Typography>
        </AppBar>
      );
    }
  }

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
          <IsUser />
        </Toolbar>
      </AppBar>
      <UserBar />
    </Box>
  );
}
