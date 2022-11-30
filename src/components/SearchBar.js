import CustomContent from "@arcgis/core/popup/content/CustomContent"
import Search from "@arcgis/core/widgets/Search"


const SearchBar = (view) => {
    // creating new search widget
    const searchWidget = new Search({
        view: view,
    })

    // clears search results whenever a search is completed
    searchWidget.on("search-complete", () => {
        searchWidget.clear()
    });

    // creating custom component from search widget
    const contentWidget = new CustomContent({
        outFields: ["*"],
        creator: () => {
            return searchWidget;
        }
    })


    return contentWidget
}

export default SearchBar
