import React, { Component } from 'react';
import './Sort.css';

class Sort extends Component {
    render() {
        return (
            <div className="dropdown-wrapper">
                <select name="sort" onChange={this.handleChange}>
                    <option default>Select Sorting</option>
                    <option value="Name">By Name</option>
                    <option value="Date">By Date</option>
                </select>
            </div>
        );
    }

    handleChange = (event) => {
        let target = event.target.value;
        if (target === 'Name') {
            this.props.filterByName();
        }
    };
}

export default Sort;
