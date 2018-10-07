import React from 'react';

const Tile = props => {
    return(
        <div className='tile is-parent'>
            <article className='tile is-child is-notification'>
                <p className='subtitle'>{props.chordName}</p>
                <div className='content'>
                    <svg width="200" height="200">
                        {props.verticalLines}
                        {props.horizontalLines}
                        <circle cx={props.x1} cy={props.y1} r="6" fill="blue" />
                        <circle cx={props.x2} cy={props.y2} r="6" fill="purple"/>
                        <circle cx={props.x3} cy={props.y3} r="6" fill="green"/>
                        { props.x4 > 0 ? <circle cx={props.x4} cy={props.y4} r="6" fill="orange"/> : '' }

                    </svg>
                </div>
            </article> 
        </div>
 
   );
}

export default Tile;