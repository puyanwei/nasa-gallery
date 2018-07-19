import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    constructor() {
        super();
        this.userInput = React.createRef();
    }

    render() {
        return (
            <form className="search-box" onSubmit={this.handleSubmit}>
                <input
                    placeholder="Search Photos"
                    ref={this.userInput}
                    autoFocus
                    required
                />
                <input type="submit" />
            </form>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.suggestedImages(this.userInput.current.value);
        this.userInput.current.value = '';
    };
}

export default SearchBox;
