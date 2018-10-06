import React from 'react';
import FourFinger from '../FourFinger'

const Gb = props => {
    return(
                    <div className='tile is-parent'>
                        <article className='tile is-child is-notification'>
                            <p className='subtitle'>Gb</p>
                            <div className='content'>
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
                            </div>
                        </article> 
                    </div>
 
   );
}

export default Gb