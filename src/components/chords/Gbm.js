
import React from 'react';
import FourFinger from '../FourFinger'

const Gbm = props => {
    return(

                    <div className='tile is-parent'>
                        <article className='tile is-child is-notification'>
                            <p className='subtitle'>Gbm</p>
                            <div className='content'>
                                <FourFinger 
                                fingerOneX="7"
                                fingerOneY="57"
                                fingerTwoX="46"
                                fingerTwoY="57"
                                fingerThreeX="26"
                                fingerThreeY="25"
                                    />
                            </div>
                        </article> 
                    </div>
 
   );
}

export default Gbm