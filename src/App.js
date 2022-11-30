import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Home from "@arcgis/core/widgets/Home"
import esriConfig from "@arcgis/core/config.js"
import LayerList from "@arcgis/core/widgets/LayerList";
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

            // // creating income feature layers
            // const tractIncomeLayer = new FeatureLayer({
            //     title: "Household Income",
            //     url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/2"
            // })

            // const countyIncomeLayer = new FeatureLayer({
            //     title: "Household Income",
            //     url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/1"
            // })

            // const stateIncomeLayer = new FeatureLayer({
            //     title: "Household Income",
            //     url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/0"
            // })

            // // creating a group layer from each of the income feature layers
            // const incomeGroupLayer = new GroupLayer({
            //     title: "Income Group Layer",
            //     layers: [tractIncomeLayer, countyIncomeLayer, stateIncomeLayer],
            //     visible: false
            // })

            // // popups for each income feature layer
            // const popUpTract = PopUpIncome({ name: "{NAME} in {STATE}" }, view)
            // const popUpCounty = PopUpIncome({ name: "{NAME} in {STATE}" }, view)
            // const popUpState = PopUpIncome({ name: "{NAME}" }, view)

            // // adding popup to each of the feature layers
            // tractIncomeLayer.popupTemplate = popUpTract
            // countyIncomeLayer.popupTemplate = popUpCounty
            // stateIncomeLayer.popupTemplate = popUpState





            


            // creating layer list widget
            const layerList = new LayerList({
                view: view
            });
            layerList.multipleSelectionEnabled = "true" 

            
            // adding the group layer to map
            map.add(DemographicsGroupLayer(view))
            map.add(IncomeGroupLayer(view))
            
            // creating home icon and adding it to UI
            const homeIcon = new Home({
                view: view
            })
            view.ui.add(homeIcon, "top-left");
            
            // Adds widget below other elements in the top left corner of the view
            view.ui.add(layerList, {
                position: "bottom-left"
            })
        }
    }, []);


    return (
        <div className="mapDiv" ref={mapDiv}></div>
    )
}
