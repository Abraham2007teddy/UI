// geography.js

const geographyData = {
    offices: [
      { id: 1, name: "Alashankou, China", location: { lat: 42.8780, lng: 8.3030 } },
      { id: 2, name: "Andijon, Uzbekistan", location: { lat: 40.1454, lng: 71.8050 } },
      { id: 3, name: "Frankfurt, Germany", location: { lat: 50.1109, lng: 8.6821 } },
      { id: 4, name: "Ohio, USA", location: { lat: 40.4173, lng: -82.9071 } },
      { id: 5, name: "Rome, Italy", location: { lat: 41.9028, lng: 12.4964 } },
      { id: 6, name: "Tokyo, Japan", location: { lat: 35.6762, lng: 139.6503 } },
      { id: 7, name: "Shenzhen, China", location: { lat: 22.5431, lng: 114.0579 } },
    ],
    mapConfig: {
      mapContainerStyle: {
        height: "500px",
        width: "1070px",
      },
      center: {
        lat: 41.0082, 
        lng: 28.9784, // Center on Istanbul, for example
      },
      zoomLevel: 2, // Slightly higher zoom level to show all markers
    },
    // Add more configurations or data as necessary
  };
  
  export default geographyData;
  