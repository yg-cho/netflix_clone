
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

const MovieGenre = ({genre}) => {
    return (
        <span className="Movie__Genre">{genre}</span>
    )
}


MovieGenre.propTypes ={
    genre: PropTypes.string.isRequired
}


export default MovieGenre;