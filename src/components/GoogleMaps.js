import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { useEffect, useState } from 'react';

export default function GoogleMaps(address) {
  const [center, setCenter] = useState();

  useEffect(() => {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address.address}&key=AIzaSyBK9mJpBMWdkXd4kSscvQVc7AXJzQ8jfjc`
    )
      .then((res) => res.json())
      .then(
        (response) => {
          setCenter({
            lat: response.results[0].geometry.location.lat,
            lng: response.results[0].geometry.location.lng,
          });
        },
        [center]
      );
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  return (
    <div className='map-div'>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName='map-container'
          center={center}
          zoom={15}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
}
