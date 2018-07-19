import React, { Component } from 'react';
import './DropBox.css';

class DropBox extends Component {
    render() {
        return (
            <div className="dropdown-wrapper">
                <select
                    name="sort"
                    onChange={this.handleChange}
                    defaultValue={-1}
                >
                    <option value="-1" disabled>
                        Select Sorting
                    </option>
                    <option value="Name">By Name</option>
                    <option value="Newest">By Newest</option>
                    <option value="Oldest">By Oldest</option>
                </select>
            </div>
        );
    }

    handleChange = (event) => {
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
}

export default DropBox;
