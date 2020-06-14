import React from 'react'

import Chord from './Chord';

const ChordGroup = props => {

    return (
      <div className="flex items-center flex-wrap">
        {props.chordFamily.map((chord, id) =>
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
  )
};

export default ChordGroup;