import React from 'react';
import * as lodash from 'lodash'
import Circle from './Circle';
import Line from './Line'

const FourFinger = props => {
    const verticals = lodash.range(7, 77, 20)
    const horizontals = lodash.range(10, 110, 33)

    const keys = [props.fingerOneX, props.fingerTwoX, props.fingerThreeX, props.fingerFourX]
    const values = [props.fingerOneY, props.fingerTwoY, props.fingerThreeY, props.fingerFourY]

    let together = {};

    keys.map((key, i) => together[key] = values[i])

    let verticalLines = verticals.map((vertical, i) => 
                 <Line x1={vertical} y1="10" x2={vertical} y2="110" key={i}
                    stroke="gray" strokeWidth="2"/> 
    )

    let horizontalLines = horizontals.map((horizontal, i) => 
                 <Line x1="7" y1={horizontal} x2="67" y2={horizontal} key={i}
                    stroke="gray" strokeWidth="2"/> 
        ); 

    let circles = Object.keys(together).map((key) => 
        <Circle radius="6" key={key} x={parseInt(key)} y={parseInt(together[key])} 
            /> 
    );

    return (
            <svg width="200" height="200">
                {verticalLines}
                {horizontalLines}
                {circles}
            </svg>
    );
}

export default FourFinger;