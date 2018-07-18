import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
	render() {
		return <img src={this.props.link} alt="" />;
	}
}

export default Image;
