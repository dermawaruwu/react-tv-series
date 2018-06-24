import React, { Component } from 'react';
import './App.css';
import Intro from '../Intro';


class App extends Component {

    state = {
        series: []
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