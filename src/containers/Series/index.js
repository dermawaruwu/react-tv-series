import React, { Component } from 'react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';

class Series extends Component {

    state = {
        series: [],
        seriesName: '',
        isFetching: false,
    }

    

    onSeriesInputChange = e => {

        this.setState({seriesName: e.target.value, isFetching: true});

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)   // ' diganti menjadi ` 
            .then((response) => response.json())
            .then(json => this.setState({ series: json, isFetching: false}))
            
            //.then(json => console.log(json))

            //.then((response) => {console.log(response)})
        /* const series = ["Vikings", "Game of Thrones"];

        setTimeout(() => {
            this.setState({ series }); // same as this.setState({ series: series }); if it has same naem of "series"
            
        }, 2000) */
    


    /* console.log(e);
    console.log(e.target.value); */
    }

    render(){

        const { series, seriesName, isFetching } = this.state;


        return (
            <div>
                <div>
                    <input 
                        value={seriesName}
                        type="text" 
                        onChange = {this.onSeriesInputChange} 
                    />
                </div>
                { 
                    !isFetching && series.length === 0 && seriesName.trim() === ''
                    &&
                    <p> Please enter series name into the input </p>
                }
                {
                    !isFetching && series.length === 0 && seriesName.trim() !== ''
                    &&
                    <p>{seriesName} is not found</p>
                }
                {
                    isFetching && <Loader />
                }
                {
                    !isFetching && <SeriesList list={this.state.series}/>
                }
                
            </div>
            
        )
    }
}

export default Series;