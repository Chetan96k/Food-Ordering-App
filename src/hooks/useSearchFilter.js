import { useState } from "react";

const useSearchFilter = (originalList) => {
    const [searchResults, setSearchResults] = useState(originalList);

    const filterByQuery = (query) => {
        if (query === "") {
            setSearchResults(originalList);
        } else {
            const filtered = originalList.filter((restaurant) =>
                restaurant.info.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filtered);
        }
    };

    // If the originalList changes (like after fetching), reset results
    const resetList = () => setSearchResults(originalList);

    return [searchResults, filterByQuery, resetList];
};

export default useSearchFilter;
