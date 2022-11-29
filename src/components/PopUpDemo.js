import SearchBar from "./SearchBar"

const PopUpDemo = (title, view) => {
    const popUp = {
        title: title.name,
        alignment: "top-right",
        content: [
            SearchBar(view),
            {
                type: "text", // eslint-disable-next-line
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
                        title: "Total Population by Age",
                        caption: "",
                        type: "pie-chart",
                        value: {
                            fields: ["POP0_CY", "POP5_CY", "POP10_CY", "POP15_CY", "POP20_CY", "POP25_CY", "POP30_CY", "POP35_CY", "POP40_CY", "POP45_CY", "POP50_CY", "POP55_CY", "POP60_CY", "POP65_CY", "POP70_CY", "POP75_CY", "POP80_CY", "POP85_CY"]
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
            },
        ],
        fieldInfos: [
            {
                fieldName: "POP0_CY",
                label: "Ages 0-4",
            },
            {
                fieldName: "POP5_CY",
                label: "Ages 5-9",
            },
            {
                fieldName: "POP10_CY",
                label: "Ages 10-14",
            },
            {
                fieldName: "POP15_CY",
                label: "Ages 15-19",
            },
            {
                fieldName: "POP20_CY",
                label: "Ages 20-24",
            },
            {
                fieldName: "POP25_CY",
                label: "Ages 25-29",
            },
            {
                fieldName: "POP30_CY",
                label: "Ages 30-34",
            },
            {
                fieldName: "POP35_CY",
                label: "Ages 35-39",
            },
            {
                fieldName: "POP40_CY",
                label: "Ages 40-44",
            },
            {
                fieldName: "POP45_CY",
                label: "Ages 45-49",
            },
            {
                fieldName: "POP50_CY",
                label: "Ages 50-54",
            },
            {
                fieldName: "POP55_CY",
                label: "Ages 55-59",
            },
            {
                fieldName: "POP60_CY",
                label: "Ages 60-64",
            },
            {
                fieldName: "POP65_CY",
                label: "Ages 65-69",
            },
            {
                fieldName: "POP70_CY",
                label: "Ages 70-74",
            },
            {
                fieldName: "POP75_CY",
                label: "Ages 75-79",
            },
            {
                fieldName: "POP80_CY",
                label: "Ages 80-84",
            },
            {
                fieldName: "POP85_CY",
                label: "Ages 85+",
            },
        ],
    }

    return popUp
}

export default PopUpDemo