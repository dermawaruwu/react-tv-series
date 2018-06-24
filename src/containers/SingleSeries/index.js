import React, { Component } from 'react';
import Loader from '../../components/Loader';
import { Link } from 'react-router-dom';

class SingleSeries extends Component {

    state = {
        show: null
    };

    componentDidMount(){
        const { id } = this.props.match.params; 
        fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
            .then((response) => response.json())
            .then(json => this.setState({ show: json }))
    }

    render() {

        const { show } = this.state;
        console.log(show);

        return (
            <div>
                { show === null && <Loader />}
                {
                    show !== null 
                    && 
                    <div>
                        <p>{show.name}</p>
                        <p>Premiered: {show.premiered}</p>
                        <p>Language: {show.language}</p>
                        
                        {
                            show.rating.average !== null
                            &&
                            <p>Rating: {show.rating.average} </p>
                        }

                        {
                            show.rating.length > 0
                            &&
                            <p> Genre: {show.genres.join(', ')} </p>
                        }
                        
                        {
                            show.status !== null
                            &&
                            <p>Status: {show.status}</p>
                        }
                        
                        
                        <p>Episodes: {show._embedded.episodes.length}</p>
                        {
                            show.hasOwnProperty('image') && show.image.medium != null
                            &&
                            <p>
                                <img alt="TV Series" src={show.image.medium} />
                            </p>
                        }
                        
                        <Link to={`/`}>
                            Back to Home
                        </Link>
                    </div>
                } 
            </div> 
        )
    }
}

export default SingleSeries;