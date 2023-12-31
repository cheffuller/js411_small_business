import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Card, CardContent, Container, Typography } from '@mui/material';
import GoogleMaps from './GoogleMaps';


export default function Details(props) {
  const { listIdx } = useParams();

  useEffect(() => {
    const username = JSON.parse(localStorage.getItem('username'));
    if (username) {
      props.setUser(username);
    }
  }, []);

  return (
    <Container sx={{ marginTop: 4 }}>
      <Card sx={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
        <CardContent>
          <Typography variant='h4' sx={{ margin: 1 }} >{props.listings[listIdx].name}</Typography>
          <Typography variant='h6' sx={{ margin: 1 }}>{props.listings[listIdx].hours}</Typography>
          <Typography variant='h6' sx={{ margin: 1 }}>
            {props.listings[listIdx].address}
          </Typography>
          <Typography sx={{ margin: 2 }}>{props.listings[listIdx].description}</Typography>
          <GoogleMaps address={props.listings[listIdx].address} />
        </CardContent>
      </Card>
    </Container>
  );
}
