import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';
import 'whatwg-fetch';

class App extends Component {

    state = {
        series: []
    }

    componentDidMount(){
        fetch('http://api.tvmaze.com/search/shows?q=Vikings')
            .then((response) => response.json())
            .then(json => this.setState({ series: json}))
            
            //.then(json => console.log(json))

            //.then((response) => {console.log(response)})
        /* const series = ["Vikings", "Game of Thrones"];

        setTimeout(() => {
            this.setState({ series }); // same as this.setState({ series: series }); if it has same naem of "series"
            
        }, 2000) */
    }

    render() {
        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">TV Series List</h1>
            </header>
            <Intro message="Here you can find all of your tv series"/>
            The length of series array is {this.state.series.length}
        </div>
        );
    }
}

export default App;