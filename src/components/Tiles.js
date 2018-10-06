import React from 'react';
import Chord from './Chord'
import FourFinger from './FourFinger';

const Tiles = props => {
    return(
      <div className='container'>
         <div className="tile is-ancestor">
            <div className='tile is-vertical is-12'>
                <div className='tile'>
                    <div className='tile is-parent'>
                        <article className='tile is-child is-notification'>
                            <p className='subtitle'>Gb</p>
                            <FourFinger 
                                fingerOneX="27"
                                fingerOneY="25"
                                fingerTwoX="46"
                                fingerTwoY="57"
                                fingerThreeX="66"
                                fingerThreeY="25"
                                fingerFourX="07"
                                fingerFourY="89"
                                />
                        </article> 
                    </div>
                    <div className='tile is-parent'>
                        <article className='tile is-child is-notification'>
                            <p className='subtitle'>Gbm</p>
                            <Chord
                                fingerOneX="7"
                                fingerOneY="57"
                                fingerTwoX="46"
                                fingerTwoY="57"
                                fingerThreeX="26"
                                fingerThreeY="25"
                                />
                                </article> 
                    </div>
                    <div className='tile is-parent'>
                        <article className='tile is-child is-notification'>
                            <p className='subtitle'>Gbaug</p>

                            <FourFinger
                                fingerOneX="7"
                                fingerOneY="20"
                                fingerTwoX="32"
                                fingerTwoY="50"
                                fingerThreeX="66"
                                fingerThreeY="20"
                                fingerFourX="07"
                                fingerFourY="89"
                                />
                        </article> 
                    </div>
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