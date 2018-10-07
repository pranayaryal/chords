import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="menu">
        <p className="menu-label">
            Chords
        </p>
        <ul class="menu-list">
            <li>
                <Link to="/mmr">Gb</Link>
            </li>
            <li>
                <Link to="/vim">G</Link>
            </li>
            <li>
                <Link to="/vim">Ab</Link>
            </li>
            <li>
                <Link to="/vim">Eb</Link>
            </li>
        </ul>
        
        </aside>
        
      </div>
    );
  }
}

export default Menu;