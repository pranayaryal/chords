import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import data from '../data';


const Navbar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const chords = Object.keys(data);
  return (
    <header className="bg-gray-900 lg:hidden">
      <div className="px-4 py-3">
        <div className="lg:hidden text-right">
          <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen &&
                <path v-if="isOpen" fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              }
              {!isOpen &&
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              }
            </svg>

          </button>
        </div>
      </div>

      {/* <div className={isOpen ? 'block text-white px-2 pt-2 pb-4 sm:block': 'hidden sm:block sm:text-white sm:px-2 sm:pt-2 sm:pb-4'}> */}
      <div onClick={() => setIsOpen(false)} className={`text-white text-center px-2 pt-2 pb-4 lg:hidden  ${isOpen ? 'block' : 'hidden'}`}>
        {/* <NavLink to="/Gb" className="block px-2 py-1 rounded hover:bg-gray-800">Gb</NavLink>
        <NavLink to="/G" className="block px-2 py-1 rounded hover:bg-gray-800">G</NavLink>
        <NavLink to="/Ab" className="block px-2 py-1 rounded hover:bg-gray-800">Ab</NavLink>
        <NavLink to="/A" className="block px-2 py-1 rounded hover:bg-gray-800">A</NavLink>
        <NavLink to="/Bb" className="block px-2 py-1 rounded hover:bg-gray-800">Bb</NavLink>
        <NavLink to="/B" className="block px-2 py-1 rounded hover:bg-gray-800">B</NavLink>
        <NavLink to="/C" className="block px-2 py-1 rounded hover:bg-gray-800">C</NavLink>
        <NavLink to="/Db" className="block px-2 py-1 rounded hover:bg-gray-800">Db</NavLink>
        <NavLink to="/D" className="block px-2 py-1 rounded hover:bg-gray-800">D</NavLink>
        <NavLink to="/Eb" className="block px-2 py-1 rounded hover:bg-gray-800">Eb</NavLink>
        <NavLink to="/E" className="block px-2 py-1 rounded hover:bg-gray-800">E</NavLink>
        <NavLink to="/F" className="block px-2 py-1 rounded hover:bg-gray-800">F</NavLink> */}
        {chords.map(chord => 
          <NavLink className="mt-2 block px-2 py-1 rounded hover:bg-gray-800" to={`/${chord}`} key={chord}>{chord}</NavLink>
        )
        }
      </div>
    </header>

  )
};

export default Navbar;