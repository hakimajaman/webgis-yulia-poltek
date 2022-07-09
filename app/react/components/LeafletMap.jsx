import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
  return (
    <>
      <MapContainer>
        <TileLayer url="https://i.picsum.photos/id/384/200/300.jpg?hmac=XxaMr3mI-4OhEVSNwfLw4oqF4Je819ACxZKz52AzXvQ" />
        {/* <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </>
  );
};

export default LeafletMap;
