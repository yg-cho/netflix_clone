import React, {Component} from 'react';

import './App.css';
import Movie from './Movie';










class App extends Component {
    // Render: componentWillMount() -> render() -> componentDidMount()
    // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

    state = {
        greeting: 'Hello',
        movies: [
            {
                id: 1,
                title: "Matrix",
                poster: "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg"
            },
            {
                id: 2,
                title: "Full Metal Jacket",
                poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Full_Metal_Jacket_poster.jpg"
            },
            {
                id: 3,
                title: "Oldboy",
                poster: "https://upload.wikimedia.org/wikipedia/en/b/bb/Oldboy_2013_film_poster.jpg"
            },
            {
                id: 4,
                title: "Star Wars",
                poster: "https://i.pinimg.com/736x/a1/61/c7/a161c7034917936f8bd53ca65bc6f0d0--star-wars-stuff-art-illustrations.jpg"
            }
        ]
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                movies: [
                    ...this.state.movies,
                    {
                        title: "Trainspotting",
                        poster: "https://resizing.flixster.com/OUEArjor-MbyCV6GqLU85Hk9jQI=/300x300/v1.bjs1NTQ3OTM7ajsxNzQ2NjsxMjAwOzIwMDA7MTMzMQ"
                    }
                ]
            })
        }, 5000)
    }

    render() {
        return (
            <div className="App">
                {this.state.movies.map(movie => {
                    return <Movie key={movie.id} title={movie.title} poster={movie.poster}/>
                })}
            </div>
        );
    }
}
export default App;
