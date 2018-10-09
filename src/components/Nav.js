import React from 'react';


const Nav = ({match}) => {
    return (
        <nav class="level">
            <div class="level-item has-text-centered">
                <div>
                <p class="title">Ukelele Chordss ({match.params.id})</p>
                </div>
            </div>
        </nav>
    )
}

export default Nav;