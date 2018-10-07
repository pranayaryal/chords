import React from 'react';
import { Link } from 'react-router-dom';

const Menu1 = props => {
    return(
      <div>
        <aside className="menu">
        <p className="menu-label">
            Chords
        </p>
        <ul class="menu-list">
            <li>
                <Link to="/Gb">Gb</Link>
            </li>
            <li>
                <Link to="/G">G</Link>
            </li>
            <li>
                <Link to="/Ab">Ab</Link>
            </li>
            <li>
                <Link to="/A">A</Link>
            </li>
            <li>
                <Link to="/Bb">Bb</Link>
            </li>
            <li>
                <Link to="/B">B</Link>
            </li>
            <li>
                <Link to="/C">C</Link>
            </li>
            <li>
                <Link to="/Db">Db</Link>
            </li>
            <li>
                <Link to="/D">D</Link>
            </li>
            <li>
                <Link to="/Eb">Eb</Link>
            </li>
            <li>
                <Link to="/E">E</Link>
            </li>
            <li>
                <Link to="/F">F</Link>
            </li>
        </ul>
        
        </aside>
         
      </div>
 
   );
}

export default Menu1;