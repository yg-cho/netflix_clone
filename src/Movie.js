
import React from 'react';
import PropTypes from 'prop-types';
import MoviePoster from "./MoviePoster";



const Movie = ({title, poster, genres, synopsis }) => {
    return (
        <div>
            <MoviePoster poster={poster} alt={title} />

            <h1>{title}</h1>
            <h6>{synopsis}</h6>
        </div>
    );
};

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array,
    synopsis : PropTypes.string.isRequired
};

export default Movie;