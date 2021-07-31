import React from 'react';
// import {
//   GoogleMap,
//   Marker,
//   withGoogleMap,
//   withScriptjs,
// } from 'react-google-maps';
import { Card, CardBody, CardTitle, Row } from 'reactstrap';
import { Colxx } from '../../components/common/CustomBootstrap';

// const MapWithAMarker = withScriptjs(
//   withGoogleMap(() => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//       <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     </GoogleMap>
//   ))
// );

const MapsUi = () => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Card className="mb-4">
            <CardBody>
              <CardTitle>Location</CardTitle>
              {/* <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCO8MfadmlotuuHC8wmjwL_46I5QAMIiRU&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div className="map-item" />}
                containerElement={<div className="map-item" />}
                mapElement={<div className="map-item" />}
              /> */}
              <iframe
                title="ljzdhfu"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53992.586034393345!2d74.015638!3d32.243641!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f3abaec6bc9f1%3A0xcba6fca74382cb1a!2sFotan%20Central%20High%20School%20Kalaske!5e0!3m2!1sen!2sus!4v1627673743244!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 'none' }}
                // style="border:0;"
                loading="lazy"
              />
            </CardBody>
          </Card>
        </Colxx>
      </Row>
    </>
  );
};
export default MapsUi;
