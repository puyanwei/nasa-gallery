import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SearchBox from './components/SearchBox/SearchBox.js';
import Image from './components/Image/Image.js';
import Sort from './components/Sort/Sort.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageData: [],
        };
    }

    render() {
        let imageData = this.state.imageData.slice(0, 20);
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
                <SearchBox suggestedImages={this.suggestedImages} />
                <Sort filterByName={this.filterByName} />
                <section className="gallery">{imageData}</section>
            </div>
        );
    }

    componentWillMount() {
        this.getAPIData();
    }

    getAPIData = (search = 'star') => {
        let array = [];
        const url = `https://images-api.nasa.gov/search?title=${search}&media_type=image`;
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

    filterByName = () => {
        let arrayOfHashes = this.state.imageData;
        arrayOfHashes.sort((a, b) => {
            if (a.title < b.title) {
                return -1;
            } else if (a.title > b.title) {
                return 1;
            } else {
                return 0;
            }
        });
        this.setState({
            imageData: arrayOfHashes,
        });
    };
}

export default App;
