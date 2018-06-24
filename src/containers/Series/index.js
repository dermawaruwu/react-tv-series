import React, { Component } from 'react';

class Series extends Component {

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


    render(){
        return (
            <div> The length of series array is {this.state.series.length} </div>
        )
    }
}

export default Series;