import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Home from "@arcgis/core/widgets/Home"
import esriConfig from "@arcgis/core/config.js"
import LayerList from "@arcgis/core/widgets/LayerList";
import GroupLayer from "@arcgis/core/layers/GroupLayer"
import IncomeGroupLayer from "./components/IncomeGroupLayer";
import DemographicsGroupLayer from "./components/DemographicsGroupLayer"
import './index.css';


export default function App() {

    esriConfig.apiKey = process.env.REACT_APP_ARCGIS_API_KEY
    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {


            // creating base map
            const map = new Map({
                basemap: "arcgis-dark-gray", // Basemap layer service
            })


            // creating map view
            const view = new MapView({
                map: map,
                center: [-73.9956, 40.6959], // Longitude, latitude
                zoom: 11, // Zoom level
                container: mapDiv.current, // Div element
                popup: {
                    defaultPopupTemplateEnabled: false,
                    dockEnabled: true,
                    dockOptions: {
                        buttonEnabled: false,
                        breakpoint: false
                    }
                },
            });


            // Combining the different group layers into one group
            const aggGroupLayer = new GroupLayer({
                title: "Layers",
                visible: true,
                layers: [
                    DemographicsGroupLayer(view),
                    IncomeGroupLayer(view)
                ],
                visibilityMode: "exclusive"
            })


            // creating layer list widget
            const layerList = new LayerList({
                view: view,
            });


            // creating home icon and adding it to UI
            const homeIcon = new Home({
                view: view
            })


            // Adding layers to LayerList and positioning icons/LayerList
            map.add(aggGroupLayer)
            view.ui.add(homeIcon, "top-left")
            view.ui.add(layerList, {
                position: "bottom-left"
            })
        }
    }, []);


    return (
        <div className="mapDiv" ref={mapDiv}></div>
    )
}
