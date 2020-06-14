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
        {chords.map(chord => 
          <NavLink className="mt-2 block px-2 py-1 rounded text-menu-color hover:bg-gray-800" to={`/${chord}`} key={chord}>{chord}</NavLink>
        )
        }
      </div>
    </header>

  )
};

export default Navbar;