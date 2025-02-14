import React, { useRef, useEffect } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import geographyData from "../../objects/geography"; // Import geography data
import pinIcon from "../../../assets/images/for_pages/pin.png"; // Pin icon path

const MMSH_offices = () => {
  const mapRef = useRef(null);

  // Map style to brighten the map
  const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [{ "color": "white" }]
    },
    {
      "elementType": "labels.icon",
      "stylers": [{ "visibility": "off" }]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#616161" }]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#f5f5f5" }]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{ "color": "#ffffff" }]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{ "color": "#c9c9c9" }]
    }
  ];

  // Function to initialize markers
  const initializeMarkers = () => {
    if (!window.google || !mapRef.current) return;

    geographyData.offices.forEach((office) => {
      new window.google.maps.Marker({
        position: office.location,
        map: mapRef.current,
        icon: {
          url: pinIcon,
          scaledSize: new window.google.maps.Size(30, 30),
        },
      });
    });
  };

  useEffect(() => {
    if (window.google && mapRef.current) {
      initializeMarkers();
    }
  }, [mapRef.current]);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBuCHLzhP1xp0O_havQD_Ze1ydBII94wss" libraries={["places", "geometry", "visualization"]}>
      <GoogleMap
        mapContainerStyle={{ width: "100vw", height: "100vh" }} // Full-screen map
        center={geographyData.mapConfig.center}
        zoom={3}
        mapId="678ac1d133600fe7"
        onLoad={(map) => {
          mapRef.current = map;
          map.setOptions({ styles: mapStyle }); // Apply the custom style
          initializeMarkers(); // Initialize markers when map loads
        }}
      />
    </LoadScript>
  );
};

export default MMSH_offices;
