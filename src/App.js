
import React, { useState } from 'react';
import ChordName from './components/ChordName'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './components/Menu'
import ChordContainer from './components/ChordContainer'
import Navbar from './components/Navbar';
import ReactGA from 'react-ga'

import data from './data'

// import './App.css';

const App = () => {

  ReactGA.initialize('UA-58522655-2')
  ReactGA.pageview(window.location.pathname + window.location.search)

  const [chords, setChords] = useState(Object.keys(data))

  return (
    <BrowserRouter>
      <div className="">
        <Navbar />
        <Route path="/:id" component={ChordName} />
        <div className="px-8 mt-2 lg:px-40">
          <div className="flex">
            <div className='hidden lg:block lg:mt-10 lg:w-1/6'>
              <Menu />
            </div>
            <div className="lg:ml-5">
              <Route exact path='/' component={() => <ChordContainer chord="Gb" />} />
              {chords.map((chord, id) =>
                <Route path={`/${chord}`} key={id} component={() => <ChordContainer chord={chord} />} />
              )}
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

