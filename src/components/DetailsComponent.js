import React from "react";
import GoogleMapReact from 'google-map-react';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Details = (props) => {

  const { id } = useParams();
  console.log(props.map.lat, props.map.lng)
  const selected = props.businesses.find(b => b.id == id)
  const defaultProps = {
    center: {
      lat: props.map.lat,
      lng: props.map.lng
    },
    zoom: 11
  };

  useEffect(() => {
    let string = selected.address.replaceAll(" ", "+")
    console.log(string)
    props.fetchMakes(string)

  }, []);

  return (
    // Important! Always set the container height explicitly
    <div style={{contentAlign: "center"}}>
      <div>
        <h2>{selected.name}</h2>
        <h4>{selected.address}</h4>
        <h4>{selected.hours}</h4>
        <span>{selected.description}</span>
      </div>

      <div style={{ height: '90vh', width: '50%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDludEg1LoGc0K1gPDsHZw4mu7XMfUV6Z4" }}
          center={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Details