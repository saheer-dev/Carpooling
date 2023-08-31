import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyAEb0cTNhRux3f9oZGHYwbj3EVPCaLLa1c",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      //   bootstrapURLKeys={{ key: "AIzaSyAEb0cTNhRux3f9oZGHYwbj3EVPCaLLa1c" }}
      mapContainerStyle={containerStyle}
      center={{ lat: 44, lng: -80 }}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
      <Marker position={{ lat: 44, lng: -80 }}></Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
