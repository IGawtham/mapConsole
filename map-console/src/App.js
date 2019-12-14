import React, { useState } from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps'
import * as vehicleData from './vehicleData.json'
function Map(props) {
  const [selectedVehicle, setSelectedVehicle] = useState();
  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 10.010366, lng: 77.476814 }}>
      {vehicleData.features.map(vehicle => (


        <Marker key={Math.random()}
          position={{ lat: vehicle.geometry.coordinates[0], lng: vehicle.geometry.coordinates[1] }}
          onClick={() => {
            setSelectedVehicle(vehicle)
            console.log({ ...props })
          }}
        // icon={{
        //   url: './car.png',
        //   scaledSize: new window.google.maps.Size(25, 25)
        // }}
        />
      )
      )
      }
      {
        selectedVehicle && (
          <InfoWindow
            position={{ lat: selectedVehicle.geometry.coordinates[0], lng: selectedVehicle.geometry.coordinates[1] }}
            onCloseClick={() => { setSelectedVehicle(null) }}
          >
            <div>{JSON.stringify(selectedVehicle)}</div>
          </InfoWindow>
        )
      }

    </GoogleMap>)
}

const WrappedMap = withScriptjs(withGoogleMap(props => <Map {...props} />))

function App(props) {
  return (
    <div style={{ width: "100vw", height: '100vh' }}>

      <WrappedMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=YOUR_API_KEY"}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
        vehicleType={props.vehicleType}
      />
    </div>
  );
}

export default App;
