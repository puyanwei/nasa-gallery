import React from 'react';
import PropTypes from 'prop-types';

import './DropBox.css';

const DropBox = (props) => {
	const handleChange = (event) => {
		let target = event.target.value;
		if (target === 'Name') {
			this.props.filterByName();
		}
		if (target === 'Oldest') {
			this.props.filterByDateOld();
		}
		if (target === 'Newest') {
			this.props.filterByDateNew();
		}
	};
	return (
		<div className="dropdown-wrapper">
			<select name="sort" onChange={handleChange} defaultValue={-1}>
				<option value="-1" disabled>
					Select Sorting
				</option>
				<option value="Name">By Name</option>
				<option value="Newest">By Newest</option>
				<option value="Oldest">By Oldest</option>
			</select>
		</div>
	);
};

DropBox.propTypes = {
	filterByName: PropTypes.func,
	filterByDateOld: PropTypes.func,
	filterByDateNew: PropTypes.func
};

export default DropBox;
