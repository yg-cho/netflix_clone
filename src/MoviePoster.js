import React from 'react';
import PropTypes from 'prop-types';

const MoviePoster = ({poster}) => {
    return (
        <img src={poster} alt="Movie Poster" />
    );
};

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired
};

export default MoviePoster;