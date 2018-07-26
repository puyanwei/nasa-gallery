import React from 'react';
import PropTypes from 'prop-types';

import './Image.css';

const Image = ({ title, link }) => {
	return (
		<div className="image-wrapper">
			<p>{title}</p>
			<img src={link} alt="" />
		</div>
	);
};

Image.propTypes = {
	title: PropTypes.string,
	link: PropTypes.string
};

export default Image;
