import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../data'

const Menu = props => {
  const chords = Object.keys(data);
  return (
    <div className="flex flex-col text-gray-700 text-center">
      {chords.map(chord =>
        <NavLink className="hover:bg-gray-300 mt-2" to={`/${chord}`} key={chord}>{chord}</NavLink>
      )}
    </div>

  );
}

export default Menu;