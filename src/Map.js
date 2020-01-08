import React from 'react';
import GoogleMapReact from 'google-map-react';
import location from './assets/img/location-icon.png'

const Label = ({ text }) => <img src={location} />;

function Map() {

  return (
    <>
        <div style={{ height: '60vh', width: '100%' }}>
            <GoogleMapReact
                defaultCenter={{
                    lat: 51.5124352,
                    lng: -0.1291036
                }}
                defaultZoom={11}
                options={{MapTypeControlStyle:[{"featureType":"all","elementType":"geometry.fill","stylers":[{"lightness":"-100"},{"color":"#ffdac9"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffcab1"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#ffcab1"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#92e1dd"}]}]}}
                >
                    <Label
                        lat={51.5124352}
                        lng={-0.1291036}
                        text="My Marker"
                    />
            </GoogleMapReact>
        </div>
    </>
  );
}

export default Map;
