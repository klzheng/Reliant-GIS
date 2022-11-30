import SearchBar from "./SearchBar"

const PopUpIncome = (title, view) => {
    const popUp = {
        title: title.name,
        alignment: "top-right",
        content: [
            SearchBar(view), // search bar
            {
                type: "text", // eslint-disable-next-line
                text: "The median household income in this area is estimated to be <b>${B19049_001E}</b>.",
            },
            {
                type: "text",
                text: "The total number of households in this area is estimated to be {B19053_001E}.",
            },
            // Column chart
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
            // Table of info
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
        // Labelling Data
        fieldInfos: [
            {
                fieldName: "B19049_001E",
                label: "Median Household Income in the past 12 Months",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "B19053_001E",
                label: "Total Number of Households",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "B19049_002E",
                label: "< 25 years old ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "B19049_003E",
                label: "25 - 44 years old",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "B19049_004E",
                label: "45 - 65 years old",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "B19049_005E",
                label: "> 65 years old",
                format: {
                    digitSeparator: true
                }
            }
        ],
    }

    return popUp
}

export default PopUpIncome