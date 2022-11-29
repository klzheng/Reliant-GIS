import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

const FeatureLayerIncome = (title, url) => {
    const incomeLayer = new FeatureLayer({
        title: title,
        url: url,
    })

    return incomeLayer
}

export default FeatureLayerIncome