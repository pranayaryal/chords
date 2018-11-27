import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu1 = props => {
    return(
      <div>
        <aside className="menu">
        <p className="menu-label">
            Chord Families
        </p>
        <ul class="menu-list">
            <li>
                <NavLink to="/Gb">Gb</NavLink>
            </li>
            <li>
                <NavLink to="/G">G</NavLink>
            </li>
            <li>
                <NavLink to="/Ab">Ab</NavLink>
            </li>
            <li>
                <NavLink to="/A">A</NavLink>
            </li>
            <li>
                <NavLink to="/Bb">Bb</NavLink>
            </li>
            <li>
                <NavLink to="/B">B</NavLink>
            </li>
            <li>
                <NavLink to="/C">C</NavLink>
            </li>
            <li>
                <NavLink to="/Db">Db</NavLink>
            </li>
            <li>
                <NavLink to="/D">D</NavLink>
            </li>
            <li>
                <NavLink to="/Eb">Eb</NavLink>
            </li>
            <li>
                <NavLink to="/E">E</NavLink>
            </li>
            <li>
                <NavLink to="/F">F</NavLink>
            </li>
        </ul>
        </aside>
         
      </div>
 
   );
}

export default Menu1;