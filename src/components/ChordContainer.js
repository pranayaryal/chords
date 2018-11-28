import React, { useState } from 'react';
import Chord from './Chord'
import * as lodash from 'lodash'
import Line from './Line'
import data from '../data'

const ChordContainer = (props)=> {

    const chordFromData  = data[props.chord]
    const [ chordFamily, setChordFamily ] = useState(chordFromData)
    console.log(chordFamily)

    return (
        <div>
         <div className="tile is-ancestor">
            <div className='tile is-vertical is-12'>
                <div className='tile'>
                    { chordFamily.slice(0,6).map((chord,id) => 
                       <Chord chordName={chord.name}  
                         key={id}
                          x1={chord.x1} y1={chord.y1} 
                          x2={chord.x2} y2={chord.y2}
                          x3={chord.x3} y3={chord.y3}
                          x4={chord.x4} y4={chord.y4}
                          textLower={chord.textLower}
                          textUpper={chord.textUpper}

                          />
                    )
                    }
                </div>
            </div>
         </div>
         <div className="tile is-ancestor">
            <div className='tile is-vertical is-12'>
                <div className='tile'>
                    { chordFamily.slice(6,12).map((chord,id) => 
                       <Chord chordName={chord.name}  
                         key={id}
                          x1={chord.x1} y1={chord.y1} 
                          x2={chord.x2} y2={chord.y2}
                          x3={chord.x3} y3={chord.y3}
                          x4={chord.x4} y4={chord.y4}
                          textLower={chord.textLower}
                          textUpper={chord.textUpper}

                          />
                    )
                    }
                </div>
            </div>
         </div>
         <div className="tile is-ancestor">
            <div className='tile is-vertical is-12'>
                <div className='tile'>
                    { chordFamily.slice(12,15).map((chord,id) => 
                       <Chord chordName={chord.name}  
                         key={id}
                          x1={chord.x1} y1={chord.y1} 
                          x2={chord.x2} y2={chord.y2}
                          x3={chord.x3} y3={chord.y3}
                          x4={chord.x4} y4={chord.y4}
                          textLower={chord.textLower}
                          textUpper={chord.textUpper}

                          />
                    )
                    }
                </div>
            </div>
         </div>
         </div>
 




);}

export default ChordContainer;
