import SearchBar from "./SearchBar"

const PopUpDemo = (title, view) => {

    const popUp = {
        title: title.name,
        alignment: "top-right",
        content: [
            SearchBar(view),
            {
                type: "media",
                mediaInfos: [
                    {
                        title: "<b>Total Population</b>",
                        caption: "by Age",
                        type: "pie-chart",
                        value: {
                            fields: ["POP0_CY", "POP5_CY", "POP10_CY", "POP15_CY", "POP20_CY", "POP25_CY", "POP30_CY", "POP35_CY", "POP40_CY", "POP45_CY", "POP50_CY", "POP55_CY", "POP60_CY", "POP65_CY", "POP70_CY", "POP75_CY", "POP80_CY", "POP85_CY"]
                        },
                    }
                ]
            },
            {
                title: "Age Statistics",
                type: "text", // eslint-disable-next-line
                text: "The median age in this area is <b>{MEDAGE_CY}</b>.",
            },
            {
                type: "text",
                text: "There are <b>{MALES_CY}/{FEMALES_CY}</b> males to females, with a median age of <b>{MEDMAGE_CY}</b> and <b>{MEDFAGE_CY}</b>, respectively.",
            },
            {
                type: "media",
                mediaInfos: [
                    {
                        title: "<b>Total Population</b> ",
                        caption: "by Generation",
                        type: "column-chart",
                        value: {
                            fields: ["OLDRGENSCY", "BABYBOOMCY", "GENX_CY", "MILLENN_CY", "GENZ_CY", "GENALPHACY",]
                        },
                    }
                ]
            },
            {
                type: "media",
                mediaInfos: [
                    {
                        title: "<b>Total Population</b>",
                        caption: "by Race",
                        type: "pie-chart",
                        value: {
                            fields: ["NHSPWHT_CY", "NHSPBLK_CY", "HISPPOP_CY", "NHSPASN_CY", "NHSPPI_CY", "NHSPAI_CY", "NHSPOTH_CY", "NHSPMLT_CY"]
                        },
                    }
                ]
            },
            {
                type: "fields",
                title: "Population by Race",
                fieldInfos: [
                    {
                        fieldName: "NHSPWHT_CY",
                        label: "White",
                        format: {
                            digitSeparator: true
                        }
                    },
                    {
                        fieldName: "NHSPBLK_CY",
                        label: "Black/African American",
                        format: {
                            digitSeparator: true
                        }
                    },
                    {
                        fieldName: "HISPPOP_CY",
                        label: "Hispanic",
                        format: {
                            digitSeparator: true
                        }
                    },
                    {
                        fieldName: "NHSPASN_CY",
                        label: "Asian",
                        format: {
                            digitSeparator: true
                        }
                    },
                    {
                        fieldName: "NHSPPI_CY",
                        label: "Pacific Islander",
                        format: {
                            digitSeparator: true
                        }
                    },
                    {
                        fieldName: "NHSPAI_CY",
                        label: "American Indian/Alaska Native",
                        format: {
                            digitSeparator: true
                        }
                    },
                    {
                        fieldName: "NHSPOTH_CY",
                        label: "Other",
                        format: {
                            digitSeparator: true
                        }
                    },
                    {
                        fieldName: "NHSPMLT_CY",
                        label: "Multiple Races",
                        format: {
                            digitSeparator: true
                        }
                    },
                    {
                        fieldName: "DIVINDX_CY",
                        label: "Diversity Index (Higher is better)",
                        format: {
                            digitSeparator: true
                        }
                    },
                ],
            },
            {
                type: "media",
                mediaInfos: [
                    {
                        title: "<b>Household Income</b>",
                        caption: "by Income Range",
                        type: "pie-chart",
                        value: {
                            fields: ["HINC0_CY", "HINC15_CY", "HINC25_CY", "HINC35_CY", "HINC50_CY", "HINC75_CY", "HINC100_CY", "HINC150_CY", "HINC200_CY"]
                        },
                    }
                ]
            },
            {
                type: "text",
                text: "The median household income is <b>${MEDHINC_CY}</b> and the Income Per Capita is <b>${PCI_CY}</b>. The median home value is around <b>${MEDVAL_CY}</b>"
            },
            {
                type: "text",
                text: "There is a reported <b>{VACANT_CY}</b> number of vacant housing units of the total <b>{TOTHU_CY}</b> housing units in this area."
            },

        ],
        fieldInfos: [
            {
                fieldName: "VACANT_CY",
                label: "Vacant Housing Units",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "TOTHU_CY",
                label: "Total Housing Units",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "MEDHINC_CY",
                label: "Median Household Income",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "PCI_CY",
                label: "Income Per Capita",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "MEDVAL_CY",
                label: "Median Home Value",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "MALES_CY",
                label: "Male Population Count",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "FEMALES_CY",
                label: "Female Population Count",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "NHSPWHT_CY",
                label: "White",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "NHSPBLK_CY",
                label: "Black/African American",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HISPPOP_CY",
                label: "Hispanic",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "NHSPASN_CY",
                label: "Asian",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "NHSPPI_CY",
                label: "Pacific Islander",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "NHSPAI_CY",
                label: "American Indian/Alaska Native",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "NHSPOTH_CY",
                label: "Other",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "NHSPMLT_CY",
                label: "Multiple Races",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "DIVINDX_CY",
                label: "Diversity Index",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HINC0_CY",
                label: "< $15,000 ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HINC15_CY",
                label: "$15,000 - $24,999 ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HINC25_CY",
                label: "$25,000 - $34,999 ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HINC35_CY",
                label: "$35,000 - $49,999 ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HINC50_CY",
                label: "$50,000 - $74,999 ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HINC75_CY",
                label: "$75,000 - $99,999 ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HINC100_CY",
                label: "$100,000 - $149,999 ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HINC150_CY",
                label: "$150,000 - $199,999 ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "HINC200_CY",
                label: "> $200,000 ",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP0_CY",
                label: "Ages 0-4",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP5_CY",
                label: "Ages 5-9",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP10_CY",
                label: "Ages 10-14",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP15_CY",
                label: "Ages 15-19",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP20_CY",
                label: "Ages 20-24",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP25_CY",
                label: "Ages 25-29",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP30_CY",
                label: "Ages 30-34",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP35_CY",
                label: "Ages 35-39",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP40_CY",
                label: "Ages 40-44",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP45_CY",
                label: "Ages 45-49",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP50_CY",
                label: "Ages 50-54",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP55_CY",
                label: "Ages 55-59",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP60_CY",
                label: "Ages 60-64",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP65_CY",
                label: "Ages 65-69",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP70_CY",
                label: "Ages 70-74",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP75_CY",
                label: "Ages 75-79",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP80_CY",
                label: "Ages 80-84",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "POP85_CY",
                label: "Ages 85+",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "GENALPHACY",
                label: "Generation Alpha - 2017 or Later",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "GENZ_CY",
                label: "Generation Z - 1999 to 2016",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "MILLENN_CY",
                label: "Millennial - 1981 to 1998",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "GENX_CY",
                label: "Generation X - 1965 to 1980",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "BABYBOOMCY",
                label: "Baby Boomer Generation - 1946 to 1964",
                format: {
                    digitSeparator: true
                }
            },
            {
                fieldName: "OLDRGENSCY",
                label: "Silent & Greatest Generation - 1945 and Earlier",
                format: {
                    digitSeparator: true
                }
            },
        ],
    }

    return popUp
}

export default PopUpDemo