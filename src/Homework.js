
import React from 'react';
import PropTypes from 'prop-types';
import Homework from "./Homework";



const Homework = ({text, name}) => {
    return (
        <div>

            <h1>{text}</h1>
            <h6>{name}</h6>
        </div>
    );
};

Movie.propTypes = {
    text : PropTypes.string.isRequired,
    name : PropTypes.string.isRequired
};

export default Homework;