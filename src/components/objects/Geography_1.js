import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import geographyData from "./geography"; // Import geography data
import globe from "../../assets/images/for_pages/globe_for.png";
import add from "../../assets/images/MMSH/certificates/add.png";
import minus from "../../assets/images/MMSH/certificates/minus.png";
import pinIcon from "../../assets/images/for_pages/pin.png"; // Pin icon path
import { useTranslation } from 'react-i18next';

const Geography = () => {
  const [showContent, setShowContent] = useState(false);
  const toggleContent = () => setShowContent((prev) => !prev);
  const mapRef = useRef(null);
  const { t } = useTranslation();

  // Map style to brighten the map
  const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "white"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
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
    <div>
      <main className="container mt-3">
        <div className="bg-light p-5 rounded">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <h4 style={{ margin: 0, display: "flex", alignItems: "center" }}>
              <img
                src={globe}
                className="mb-2"
                width="25px"
                height="25px"
                alt="globe icon"
                style={{ marginRight: "10px", marginTop: "10px" }}
              />
              {t('map')}
            </h4>
            <button
              className="btn"
              onClick={toggleContent}
              style={{
                background: "none",
                border: "none",
                padding: "0",
                outline: "none",
                cursor: "pointer",
              }}
            >
              <img
                src={showContent ? minus : add}
                alt="indicator"
                style={{ width: "30px", marginRight: "10px", marginLeft: "12px" }}
              />
            </button>
          </div>

          {showContent && (
            <div className="row justify-content-start">
              <div className="col-12 col-lg-8">
                <LoadScript
                  googleMapsApiKey="AIzaSyBuCHLzhP1xp0O_havQD_Ze1ydBII94wss"
                  libraries={["places", "geometry", "visualization"]}
                >
                  <GoogleMap
                    mapContainerStyle={geographyData.mapConfig.mapContainerStyle}
                    center={geographyData.mapConfig.center}
                    zoom={geographyData.mapConfig.zoomLevel}
                    mapId="678ac1d133600fe7"
                    onLoad={(map) => {
                      mapRef.current = map;
                      map.setOptions({ styles: mapStyle }); // Apply the custom style
                      initializeMarkers(); // Call marker initialization when map loads
                    }}
                  />
                </LoadScript>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Geography;
