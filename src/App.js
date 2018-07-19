import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SearchBox from './components/SearchBox/SearchBox.js';
import Image from './components/Image/Image.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: [],
        };
    }

    render() {
        // loading loading screen to let api data load
        if (this.state.imageData.length === 0) {
            return (
                <div className="loading-screen">
                    <h2>Loading... </h2>
                </div>
            );
        } else {
            let imageData = this.state.imageData;
            imageData = imageData.map((hash, index) => {
                return (
                    <Image
                        title={hash.title}
                        link={hash.link}
                        id={index}
                        key={index}
                    />
                );
            });

            return (
                <div className="App">
                    <h1>NASA Gallery</h1>
                    <p>{this.state.test}</p>
                    <SearchBox suggestedImages={this.suggestedImages} />
                    <section className="gallery">{imageData}</section>
                </div>
            );
        }
    }

    componentWillMount() {
        this.getAPIData();
    }

    getAPIData = (search = 'space') => {
        let array = [];
        const url = `https://images-api.nasa.gov/search?q=${search}&media_type=image`;
        axios.get(url).then((response) => {
            let arrayOfHashes = response.data.collection.items;
            arrayOfHashes.forEach((element) => {
                array.push({
                    title: element.data[0].title,
                    link: element.links[0].href,
                });
            });
            this.setState({
                imageData: array,
            });
        });
    };

    suggestedImages = (input) => {
        this.getAPIData(input);
    };
}

export default App;
