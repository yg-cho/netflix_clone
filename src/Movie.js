
import React from 'react';
import PropTypes from 'prop-types';
import MoviePoster from "./MoviePoster";



const Movie = ({title, poster}) => {
    return (
        <div>
            <MoviePoster poster={poster} />
            <h1>{title}</h1>
        </div>
    );
};

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;