import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import SearchBox from './components/SearchBox/SearchBox.js';
import Image from './components/Image/Image.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageLinks: [],
        };
    }
    render() {
        // loading loading screen to let api data load
        if (this.state.imageLinks.length === 0) {
            return (
                <div className="loading-screen">
                    <h2>Loading... </h2>
                </div>
            );
        } else {
            let imageLinks = this.state.imageLinks;
            imageLinks = imageLinks.map((link, index) => {
                // prettier-ignore
                return (
                    <Image link={link} id={index} key={index} />
                )
            });

            return (
                <div className="App">
                    <h1>NASA Gallery</h1>
                    <p>{this.state.test}</p>
                    <SearchBox />
                    <section className="gallery">{imageLinks}</section>
                </div>
            );
        }
    }

    componentWillMount() {
        this.getImageLinksFromAPI();
    }

    getImageLinksFromAPI = () => {
        let array = [];
        const url = `https://images-api.nasa.gov/search?q=space&media_type=image`;
        axios.get(url).then((response) => {
            let arrayOfHashes = response.data.collection.items;
            arrayOfHashes.forEach((element) => {
                array.push(element.links[0].href);
            });
            this.setState({
                imageLinks: array,
            });
        });
    };
}

export default App;
