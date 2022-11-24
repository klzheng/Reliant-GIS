import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import esriConfig from "@arcgis/core/config.js"
import './index.css';



export default function App() {

    esriConfig.apiKey = process.env.REACT_APP_ARCGIS_API_KEY
    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {
            // initialize app

            const tractIncomeLayer = new FeatureLayer({
                title: "Household Income",
                url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/2"
            })

            const countyIncomeLayer = new FeatureLayer({
                title: "Household Income",
                url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/1",
            })

            const stateIncomeLayer = new FeatureLayer({
                title: "Household Income",
                url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/0",
            })

            const map = new Map({
                basemap: "arcgis-dark-gray", // Basemap layer service
                layers: [tractIncomeLayer, countyIncomeLayer, stateIncomeLayer]
            })

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
                }
            });

            const popUp = {
                title: "{County}, {STATE}",
                alignment: "top-right",
                content: [
                    {
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "B12001_calc_pctMarriedE",
                                label: "Married %"
                            },
                            {
                                fieldName: "B12001_calc_numMarriedE",
                                label: "People Married"
                            },
                            {
                                fieldName: "B12001_calc_numNeverE",
                                label: "People that Never Married"
                            },
                            {
                                fieldName: "B12001_calc_numDivorcedE",
                                label: "People Divorced"
                            }
                        ]
                    }
                ]
            }

            tractIncomeLayer.popupTemplate = popUp
        }
    }, []);


    return (
        <div className="mapDiv" ref={mapDiv}>
        </div>
    )
}
