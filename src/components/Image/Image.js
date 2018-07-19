import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Image.css';

class Image extends Component {
	render() {
		return (
			<div className="image-wrapper">
				<p>{this.props.title}</p>
				<img src={this.props.link} alt="" />
			</div>
		);
	}
}

Image.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string
};

export default Image;
