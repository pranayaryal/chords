import React from 'react';


const ChordName = ({match}) => {
    return (
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                <p class="title">Ukelele Chords ({match.params.id})</p>
                </div>
            </div>
        </nav>
    )
}

export default ChordName;