import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import {
import { Map, Marker} from "@vis.gl/react-google-maps";



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

  }, [selected]);

  return (
    // Important! Always set the container height explicitly
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center"}}>
      <div style={{ width: '50%' }}>
        <h2>{selected.name}</h2>
        <h4>{selected.address}</h4>
        <h4>{selected.hours}</h4>
        <span>{selected.description}</span>
      </div>

      <div style={{ height: '60vh', width: '50%', paddingTop: '20px'}} className="map-container">
        <Map
          style={{ borderRadius: "20px" }}
          defaultZoom={13}
          center={defaultProps.center}
          gestureHandling={"greedy"}
        >
          <Marker position={defaultProps.center} />
        </Map>
      </div>
    </div> 
  );
}

export default Details