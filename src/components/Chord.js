import React from 'react';

const Chord = props => {
    return(
        <div className='tile is-parent'>
            <article className='tile is-child is-notification'>
                <p className='subtitle'>{props.chordName}</p>
                <div className='content'>
                    <svg className="svg-class" width="200" height="200">
                        <text x="76" y="68" fill="red">{props.textLower}</text>
                        <text x="76" y="38" fill="red">{props.textUpper}</text>
                        {props.verticalLines}
                        {props.horizontalLines}
                        { props.x1 > 0 ? <circle cx={props.x1} cy={props.y1} r="6" fill="grey"/> : '' }
                        { props.x2 > 0 ? <circle cx={props.x2} cy={props.y2} r="6" fill="grey"/> : '' }
                        { props.x3 > 0 ? <circle cx={props.x3} cy={props.y3} r="6" fill="grey"/> : '' }
                        { props.x4 > 0 ? <circle cx={props.x4} cy={props.y4} r="6" fill="grey"/> : '' }

                    </svg>
                </div>
            </article> 
        </div>
 
   );
}

export default Chord;