import React from 'react';
import Chord from './Chord'
import * as lodash from 'lodash'
import Line from './Line'

const ChordContainer = (props)=> {

    const verticals = lodash.range(7, 77, 20)
    const horizontals = lodash.range(10, 143, 33)

    let verticalLines = verticals.map((vertical, i) => 
                 <Line x1={vertical} y1="10" x2={vertical} y2="142" key={i}
                    stroke="gray" strokeWidth="2"/> 
    )

    let horizontalLines = horizontals.map((horizontal, i) => 
                 <Line x1="7" y1={horizontal} x2="67" y2={horizontal} key={i}
                    stroke="gray" strokeWidth="2"/> 
        ); 

    return (

         <div className="tile is-ancestor">
            <div className='tile is-vertical is-12'>
                <div className='tile'>
                    { props.chords.map((chord,id) => 
                       <Chord chordName={chord.name}  
                         key={id}
                          x1={chord.x1} y1={chord.y1} 
                          x2={chord.x2} y2={chord.y2}
                          x3={chord.x3} y3={chord.y3}
                          x4={chord.x4} y4={chord.y4}
                          textLower={chord.textLower}
                          textUpper={chord.textUpper}
                          verticalLines={verticalLines}
                          horizontalLines={horizontalLines}

                          />
                    )
                    }
                </div>
            </div>
         </div>
 




);}

export default ChordContainer;