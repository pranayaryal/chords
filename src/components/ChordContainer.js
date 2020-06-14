import React, { useState } from 'react';
import Chord from './Chord'
import * as lodash from 'lodash'
import Line from './Line'
import data from '../data'
import ChordGroup from './ChordGroup';

const ChordContainer = (props) => {

  const chordFromData = data[props.chord]
  const [chordFamily, setChordFamily] = useState(chordFromData)
  console.log(chordFamily)
  const threes = [0, 3, 6, 9, 12, 15];
  const fives = [0, 5, 10, 15];

  return (
      <div className="px-2 mt-5 flex items-center flex-wrap sm:ml-4">
        {chordFamily.map((chord, id) =>
          <Chord chordName={chord.name}
            key={id}
            x1={chord.x1} y1={chord.y1}
            x2={chord.x2} y2={chord.y2}
            x3={chord.x3} y3={chord.y3}
            x4={chord.x4} y4={chord.y4}
            textLower={chord.textLower}
            textUpper={chord.textUpper}

          />
        )}

      </div>

  );
}

export default ChordContainer;
