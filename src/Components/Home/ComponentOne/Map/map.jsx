import React, { useMemo } from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";


import './map.css'

/* 
REM: Aggiorna index html con lo script google api 
REM: AggiornA .env con la chiave google

PASSI:
-   fai la chiave google, 
-   impostala nel .env
-   sistema script nel index.html
-

*/
// https://stackoverflow.com/questions/34517900/i-need-help-looping-fake-locations-on-google-maps-api
// var locations = [{
//     "name": "Uluru",
//     "description": "Also known as Ayers rock",
//     "lat": "33.745990",
//     "lon": "-116.315722"
// }, {
//     "name": "Mt. Everest", 
//     "description": "Located in the himalayas",
//     "lat": "33.745990",
//     "lon": "-116.315722"   
// }];
const MapPage = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <MapScreen />;

}

const MapScreen = () => {
    const center = useMemo(() => ({ lat: 41.902782, lng: 12.496366 }), []);

    return (
        <GoogleMap zoom={12} center={center} mapContainerClassName='map-container'>
            <Marker position={center} />
        </GoogleMap>
    );
}



export default MapPage;
