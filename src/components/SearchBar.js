import CustomContent from "@arcgis/core/popup/content/CustomContent"
import Search from "@arcgis/core/widgets/Search"
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol"


const SearchBar = (view) => {
    // creating new search widget
    const searchWidget = new Search({
        view: view,
    })

    searchWidget.allSources.on("after-add", ({ item }) => {
        item.resultSymbol = new SimpleMarkerSymbol({
          size: 0
        });
      });

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
