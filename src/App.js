import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import cat1 from './assets/cat1.jpg';
import cat2 from './assets/cat2.jpg';
import cat3 from './assets/cat3.jpg';
import cat4 from './assets/cat4.jpg';
import cat5 from './assets/cat5.png';
import cat6 from './assets/cat6.png';
import cat7 from './assets/cat7.jpeg';
import cat8 from './assets/cat8.jpeg';
import cat9 from './assets/cat9.jpg';
import SearchBox from './components/SearchBox/SearchBox.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>NASA Gallery</h1>
                <SearchBox />
                <section className="gallery">
                    <img src={cat1} alt="" />
                    <img src={cat2} alt="" />
                    <img src={cat3} alt="" />
                    <img src={cat4} alt="" />
                    <img src={cat5} alt="" />
                    <img src={cat6} alt="" />
                    <img src={cat7} alt="" />
                    <img src={cat8} alt="" />
                    <img src={cat9} alt="" />
                </section>
            </div>
        );
    }

    componentDidMount = () => {
        console.log(this.getImages());
    };

    getImages = () => {
        const url = `https://images-api.nasa.gov/search?q=apollo%11`;
        return axios.get(url).then((response) => {
            return response.data;
        });
    };
}

export default App;
