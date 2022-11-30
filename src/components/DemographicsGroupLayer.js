import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer"
import PopUpDemo from "./PopUpDemo";


const DemographicsGroupLayer = (view) => {
    // creating all the feature layers
    const countryDemoLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/AGOL_Base_2018_Final/FeatureServer/0",
    });

    const stateDemoLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/AGOL_Base_2018_Final/FeatureServer/1",
    });

    const countyDemoLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/AGOL_Base_2018_Final/FeatureServer/2"
    });

    const zipDemoLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/AGOL_Base_2018_Final/FeatureServer/3"
    });

    const tractDemoLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/AGOL_Base_2018_Final/FeatureServer/4"
    });

    const blockDemoLayer = new FeatureLayer({
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/AGOL_Base_2018_Final/FeatureServer/5"
    });

    // grouping feature layers
    const demoGroupLayer = new GroupLayer({
        title: "Demographics Group Layer",
        layers: [
            countryDemoLayer,
            stateDemoLayer,
            countyDemoLayer,
            zipDemoLayer,
            tractDemoLayer,
            blockDemoLayer
        ],
        visible: false,
        opacity:.5,
    })
    
    // creating pop up templates 
    const popUpDemoBlock = PopUpDemo({ name: "Block #{NAME} in {STATE_NAME}" }, view) 
    const popUpDemoTract = PopUpDemo({ name: "Tract {NAME} in {STATE_NAME}" }, view) 
    const popUpDemoZip = PopUpDemo({ name: "{ID}, {STATE_NAME}" }, view) 
    const popUpDemoCounty = PopUpDemo({ name: "{NAME}, {ST_ABBREV}" }, view) 
    const popUpDemoState = PopUpDemo({ name: "{NAME}" }, view) 
    const popUpDemoCountry = PopUpDemo({ name: "{NAME}" }, view) 

    // adding pop up templates to feature layers
    countryDemoLayer.popupTemplate = popUpDemoCountry
    stateDemoLayer.popupTemplate = popUpDemoState
    countyDemoLayer.popupTemplate = popUpDemoCounty
    tractDemoLayer.popupTemplate = popUpDemoTract
    blockDemoLayer.popupTemplate = popUpDemoBlock
    zipDemoLayer.popupTemplate = popUpDemoZip


    return demoGroupLayer
}

export default DemographicsGroupLayer