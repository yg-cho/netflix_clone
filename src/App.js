import React, {Component} from 'react';

import './App.css';
import Movie from './Movie';


class App extends Component {
    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
    state = {};

    componentDidMount(){
        this._getMovies()
    }

    renderingMovies = () => {
        const movies = this.state.movies.map(movie => {
            return <Movie  key={movie.id} poster={movie.medium_cover_image} title={movie.title} synopsis={movie.synopsis}/>
        })
        return movies
    };

    _getMovies = async () => {
        const movies = await this._callApi()
        this.setState({
            movies: movies
        })
    }

    _callApi = () => {
     return fetch('https://yts.mx/api/v2/list_movies.json?sort_by=download_count')
         .then(data=> data.json())
         .then(json=> json.data.movies)
         .catch(err => console.log(err))
    }


    render() {
        const {movies} = this.state

        return (
            <div className="App">
                { movies ? this.renderingMovies() : 'Loading' }
            </div>
        );
    }
}
export default App;
