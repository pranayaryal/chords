import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../data'

const Menu = props => {
  const chords = Object.keys(data);
  return (
    <div className="flex flex-col text-menu-color text-center xl:text-xl">
      {chords.map(chord =>
        <NavLink className="hover:bg-gray-800 mt-2" to={`/${chord}`} key={chord}>{chord}</NavLink>
      )}
    </div>

  );
}

export default Menu;