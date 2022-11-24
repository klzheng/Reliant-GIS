import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import esriConfig from "@arcgis/core/config.js"
import './index.css';



export default function App() {

    esriConfig.apiKey = process.env.REACT_APP_ARCGIS_API_KEY
    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
            // initialize app

            const map = new Map({
                basemap: "arcgis-dark-gray" // Basemap layer service
            })

            const view = new MapView({
                map: map,
                center: [-73.9956, 40.6959], // Longitude, latitude
                zoom: 11, // Zoom level
                container: "viewDiv" // Div element
            });
        }
    }, []);

    return (
        <div id="viewDiv" className="mapDiv" ref={mapDiv}>
        </div>
    )
}
