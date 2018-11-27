import React from 'react';
import Chord from './Chord'
import FourFinger from './FourFinger';
import Gb from './chords/Gb'
import Gbm from './chords/Gbm'
import Gbaug from  './chords/Gbaug'
import ChordList from './ChordList'

const Tiles = props => {
    return(
      <div className='container'>
         <div className="tile is-ancestor">
            <div className='tile is-vertical is-12'>
                <div className='tile'>
                    <Gb/>
                    <Gbm />
                    <Gbaug />
                    <ChordList />
                    <div className='tile is-parent'>
                        <article className='tile is-child is-notification'>
                            <p className='subtitle'>Gbdim</p>
                            <Chord
                                fingerOneX="20"
                                fingerOneY="20"
                                fingerTwoX="55"
                                fingerTwoY="50"
                                fingerThreeX="80"
                                fingerThreeY="20"
                                />
                        </article> 
                    </div>
                    <div className='tile is-parent'>
                        <article className='tile is-child is-notification'>
                            <p className='subtitle'>Gb7</p>
                            <Chord
                                fingerOneX="20"
                                fingerOneY="20"
                                fingerTwoX="55"
                                fingerTwoY="50"
                                fingerThreeX="80"
                                fingerThreeY="20"
                                />
                        </article> 
                    </div>
                    <div className='tile is-parent'>
                        <article className='tile is-child is-notification'>
                            <p className='subtitle'>Gbm7</p>
                            <Chord
                                fingerOneX="20"
                                fingerOneY="20"
                                fingerTwoX="55"
                                fingerTwoY="50"
                                fingerThreeX="80"
                                fingerThreeY="20"
                                />
                        </article> 
                    </div>
                </div>
            </div>
         </div>
      </div>
 
   );
}

export default Tiles;