import React from 'react';
import * as lodash from 'lodash'
import Line from './Line'

const Chord = props => {

    const verticals = lodash.range(7, 77, 20)
    const horizontals = lodash.range(10, 143, 33)

    let verticalLines = verticals.map((vertical, i) => 
                 <Line  x1={vertical} y1="10" x2={vertical} y2="142" key={i}
                    stroke="#fc85ae" strokeWidth="2"/> 
    )

    let horizontalLines = horizontals.map((horizontal, i) => 
                 <Line x1="7" y1={horizontal} x2="67" y2={horizontal} key={i}
                    stroke="#fc85ae" strokeWidth="2"/> 
        ); 
    return(
        <div className='tile is-parent'>
            <article className='tile is-child is-notification'>
                <p className='subtitle'>{props.chordName}</p>
                <div className='content'>
                    <svg className="svg-class" width="200" height="200">
                        <text x="76" y="68" fill="red">{props.textLower}</text>
                        <text x="76" y="38" fill="red">{props.textUpper}</text>
                        {verticalLines}
                        {horizontalLines}
                        { props.x1 > 0 ? <circle cx={props.x1} cy={props.y1} r="6" fill="#a7ff83"/> : '' }
                        { props.x2 > 0 ? <circle cx={props.x2} cy={props.y2} r="6" fill="#a7ff83"/> : '' }
                        { props.x3 > 0 ? <circle cx={props.x3} cy={props.y3} r="6" fill="#a7ff83"/> : '' }
                        { props.x4 > 0 ? <circle cx={props.x4} cy={props.y4} r="6" fill="#a7ff83"/> : '' }

                    </svg>
                </div>
            </article> 
        </div>
 
   );
}

export default Chord;