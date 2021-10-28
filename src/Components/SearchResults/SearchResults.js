import './SearchResults.css';
import React from "react";

import TrackList from '../TrackList/TrackList';

class SearchResults extends React.Component {
    render () {
        return (
        <div className="SearchResults">
            <h2>Results</h2>
            <TrackList songs={this.props.results}/>
        </div>)
    }
}

export default SearchResults;