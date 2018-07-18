import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    render() {
        return (
            <div className="search-box">
                <input placeholder="Search Photos" />
                <input type="submit" />
            </div>
        );
    }
}

export default SearchBox;
