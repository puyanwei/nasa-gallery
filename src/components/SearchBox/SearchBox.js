import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
    constructor() {
        super();
        this.userInput = React.createRef();
    }

    render() {
        return (
            <input
                placeholder="Search Photos"
                ref={this.userInput}
                onKeyUp={this.handleKeyUp}
                autoFocus
                required
            />
        );
    }

    handleSubmit = (event) => {
        this.handleKeyUp();
        this.userInput.current.value = '';
    };

    handleKeyUp = (event) => {
        event.preventDefault();
        this.props.suggestedImages(this.userInput.current.value);
    };
}

export default SearchBox;
