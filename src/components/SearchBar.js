import React from "react";

const searchOptions = {
    "best_match": "Best Match",
    "rating": "Highest Rated",
    "Most Reviewed": "review_count"
};

const SearchBar = () => {
    return (
        <div>
            <input type="radio" id="bestMatch" name="sort" value="bestMatch"/>
            <label for="bestMatch">Best Match</label>
            <input type="radio" id="highestRate" name="sort" value="highestRate"/>
            <label htmlFor="highestRate">Highest Rate</label>
            <input type="radio" id="mostReviewed" name="sort" value="mostReviewed"/>
            <label htmlFor="mostReviewed">Most Reviewed</label>
            <div>
                <input type="text" id="business" value="Search Businesses"/>
                <input type="text" id="location" value="Where?"/>
            </div>
            <div>
                <a>Let's go</a>
            </div>
        </div>
    )
};

export default SearchBar;