import React, { useRef, useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Search from "@arcgis/core/widgets/Search"
import Home from "@arcgis/core/widgets/Home"
import CustomContent from "@arcgis/core/popup/content/CustomContent"
import esriConfig from "@arcgis/core/config.js"
import './index.css';



export default function App() {

    esriConfig.apiKey = process.env.REACT_APP_ARCGIS_API_KEY
    const mapDiv = useRef(null);

    useEffect(() => {
        if (mapDiv.current) {

            // creating tract income feature layer
            const tractIncomeLayer = new FeatureLayer({
                title: "Household Income",
                url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/2",

            })

            // creating county income feature layer
            const countyIncomeLayer = new FeatureLayer({
                title: "Household Income",
                url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/1",
            })

            // creating state income feature layer
            const stateIncomeLayer = new FeatureLayer({
                title: "Household Income",
                url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/0",
            })

            // creating base map
            const map = new Map({
                basemap: "arcgis-dark-gray", // Basemap layer service
                layers: [tractIncomeLayer, countyIncomeLayer, stateIncomeLayer]
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

            // creating new search widget
            const searchWidget = new Search({
                view: view,
            })

            // clears search results whenever a search is completed
            searchWidget.on("search-complete", (searchResult) => {
                searchWidget.clear()
            });

            // creating custom component from search widget
            const contentWidget = new CustomContent({
                outFields: ["*"],
                creator: () => {
                    return searchWidget;
                }
            })

            // popup for tract income feature layer
            const popUpTract = {
                title: "{NAME} in {STATE}",
                alignment: "top-right",
                content: [
                    contentWidget,
                    {
                        type: "text",
                        text: "The median household income in this area is estimated to be <b>${B19049_001E}</b>.",
                    },
                    {
                        type: "text",
                        text: "The total number of households in this area is estimated to be {B19053_001E}.",
                    },
                    {
                        type: "media",
                        mediaInfos: [
                            {
                                title: "Median Householde Income ($)",
                                caption: "By age",
                                type: "column-chart",
                                value: {
                                    fields: ["B19049_002E", "B19049_003E", "B19049_004E", "B19049_005E",]
                                },
                            }
                        ]
                    },
                    {
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "B19013H_001E",
                                label: "White",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013B_001E",
                                label: "Black",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013D_001E",
                                label: "Asian",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013I_001E",
                                label: "Hispanic or Latino",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013C_001E",
                                label: "Native American",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013E_001E",
                                label: "Hawaiian and Other Pacific Islander",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013G_001E",
                                label: "2 or More Races",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013F_001E",
                                label: "Other",
                                format: {
                                    digitSeparator: true
                                }
                            },
                        ],
                    }
                ],
                fieldInfos: [
                    {
                        fieldName: "B19049_002E",
                        label: "< 25 years old ",
                    },
                    {
                        fieldName: "B19049_003E",
                        label: "25 - 44 years old",
                    },
                    {
                        fieldName: "B19049_004E",
                        label: "45 - 65 years old",

                    },
                    {
                        fieldName: "B19049_005E",
                        label: "> 65 years old",
                    }
                ],
            }

            // popup for county income feature layer
            const popUpCounty = {
                title: "{NAME} in {STATE}",
                alignment: "top-right",
                content: [
                    contentWidget,
                    {
                        type: "text",
                        text: "The median household income in this area is estimated to be <b>${B19049_001E}</b>.",
                    },
                    {
                        type: "text",
                        text: "The total number of households in this area is estimated to be {B19053_001E}.",
                    },
                    {
                        type: "media",
                        mediaInfos: [
                            {
                                title: "Median Householde Income ($)",
                                caption: "By age",
                                type: "column-chart",
                                value: {
                                    fields: ["B19049_002E", "B19049_003E", "B19049_004E", "B19049_005E",]
                                },
                            }
                        ]
                    },
                    {
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "B19013H_001E",
                                label: "White",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013B_001E",
                                label: "Black",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013D_001E",
                                label: "Asian",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013I_001E",
                                label: "Hispanic or Latino",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013C_001E",
                                label: "Native American",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013E_001E",
                                label: "Hawaiian and Other Pacific Islander",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013G_001E",
                                label: "2 or More Races",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013F_001E",
                                label: "Other",
                                format: {
                                    digitSeparator: true
                                }
                            },
                        ],
                    }
                ],
                fieldInfos: [
                    {
                        fieldName: "B19049_002E",
                        label: "< 25 years old ",
                    },
                    {
                        fieldName: "B19049_003E",
                        label: "25 - 44 years old",
                    },
                    {
                        fieldName: "B19049_004E",
                        label: "45 - 65 years old",

                    },
                    {
                        fieldName: "B19049_005E",
                        label: "> 65 years old",
                    }
                ],
            }
            
            // popup for state income feature layer
            const popUpState = {
                title: "{NAME} in {STATE}",
                alignment: "top-right",
                content: [
                    contentWidget,
                    {
                        type: "text",
                        text: "The median household income in this area is estimated to be <b>${B19049_001E}</b>.",
                    },
                    {
                        type: "text",
                        text: "The total number of households in this area is estimated to be {B19053_001E}.",
                    },
                    {
                        type: "media",
                        mediaInfos: [
                            {
                                title: "Median Householde Income ($)",
                                caption: "By age",
                                type: "column-chart",
                                value: {
                                    fields: ["B19049_002E", "B19049_003E", "B19049_004E", "B19049_005E",]
                                },
                            }
                        ]
                    },
                    {
                        type: "fields",
                        fieldInfos: [
                            {
                                fieldName: "B19013H_001E",
                                label: "White",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013B_001E",
                                label: "Black",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013D_001E",
                                label: "Asian",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013I_001E",
                                label: "Hispanic or Latino",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013C_001E",
                                label: "Native American",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013E_001E",
                                label: "Hawaiian and Other Pacific Islander",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013G_001E",
                                label: "2 or More Races",
                                format: {
                                    digitSeparator: true
                                }
                            },
                            {
                                fieldName: "B19013F_001E",
                                label: "Other",
                                format: {
                                    digitSeparator: true
                                }
                            },
                        ],
                    }
                ],
                fieldInfos: [
                    {
                        fieldName: "B19049_002E",
                        label: "< 25 years old ",
                    },
                    {
                        fieldName: "B19049_003E",
                        label: "25 - 44 years old",
                    },
                    {
                        fieldName: "B19049_004E",
                        label: "45 - 65 years old",

                    },
                    {
                        fieldName: "B19049_005E",
                        label: "> 65 years old",
                    }
                ],
            }

            // creating home icon
            const homeIcon = new Home({
                view: view
            })

            // adding home icon to the ui
            view.ui.add(homeIcon, "top-left");

            // adding popup to each of the feature layers
            tractIncomeLayer.popupTemplate = popUpTract
            countyIncomeLayer.popupTemplate = popUpCounty
            stateIncomeLayer.popupTemplate = popUpState
        }
    }, []);


    return (
        <div className="mapDiv" ref={mapDiv}></div>
    )
}
