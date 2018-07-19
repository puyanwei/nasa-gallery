import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './SearchBox.css';

class SearchBox extends Component {
	constructor() {
		super();
		this.userInput = React.createRef();
	}

	render() {
		return (
			<input
				placeholder="Search Photos - Enjoy the default stars"
				ref={this.userInput}
				onKeyUp={this.handleKeyUp}
				autoFocus
				required
			/>
		);
	}

	handleKeyUp = (event) => {
		event.preventDefault();
		this.userInput.current.value === ''
			? this.props.suggestedImages()
			: this.props.suggestedImages(this.userInput.current.value);
	};
}

SearchBox.propTypes = {
	suggestedImages: PropTypes.func
};
export default SearchBox;
