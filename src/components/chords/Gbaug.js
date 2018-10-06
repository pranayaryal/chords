import React from 'react';
import FourFinger from '../FourFinger'

const Gbaug = props => {
    return(
            <div className='tile is-parent'>
                <article className='tile is-child is-notification'>
                    <p className='subtitle'>Gbaug</p>
                    <div className='content'>
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
                    </div>
                </article> 
            </div>
 
   );
}

export default Gbaug