import React from 'react';
import PropTypes from 'prop-types';

const MoviePoster = ({poster, alt}) => {
    return (
        <img src={poster} alt={alt} />
    );
};

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
};

export default MoviePoster;