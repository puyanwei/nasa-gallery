import React, { Component } from 'react';
import './Image.css';

class Image extends Component {
    render() {
        return (
            <div className="image-wrapper">
                <p>Title Text</p>
                <img src={this.props.link} alt="" />
            </div>
        );
    }
}

export default Image;
