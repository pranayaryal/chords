import React from 'react';


const Circle = props => {
    return (
            <circle cx={props.x} cy={props.y} r={props.radius} fill="purple"/>
    );
}

export default Circle;