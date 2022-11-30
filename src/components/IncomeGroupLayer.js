import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import GroupLayer from "@arcgis/core/layers/GroupLayer"
import PopUpIncome from "./PopUpIncome";


const IncomeGroupLayer = (view) => {
    // creating all feature layers
    const tractIncomeLayer = new FeatureLayer({
        title: "Household Income",
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/2"
    })

    const countyIncomeLayer = new FeatureLayer({
        title: "Household Income",
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/1"
    })

    const stateIncomeLayer = new FeatureLayer({
        title: "Household Income",
        url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/ACS_Median_Income_by_Race_and_Age_Selp_Emp_Boundaries/FeatureServer/0"
    })

    // creating a group layer from each of the income feature layers
    const incomeGroupLayer = new GroupLayer({
        title: "Income Group Layer",
        layers: [tractIncomeLayer, countyIncomeLayer, stateIncomeLayer],
        visible: true,
    })

    // popups for each income feature layer
    const popUpTract = PopUpIncome({ name: "{NAME} in {STATE}" }, view)
    const popUpCounty = PopUpIncome({ name: "{NAME} in {STATE}" }, view)
    const popUpState = PopUpIncome({ name: "{NAME}" }, view)

    // adding popup to each of the feature layers
    tractIncomeLayer.popupTemplate = popUpTract
    countyIncomeLayer.popupTemplate = popUpCounty
    stateIncomeLayer.popupTemplate = popUpState

    
    return incomeGroupLayer
}

export default IncomeGroupLayer