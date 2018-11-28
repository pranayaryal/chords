
import React, { useState } from 'react';
import ChordName from './components/ChordName'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './components/Menu'
import ChordContainer from './components/ChordContainer'

import data from './data'

// import './App.css';

const App = () => {
   
    const [ chords, setChords ] = useState(Object.keys(data))

    return (
    <BrowserRouter>
      <div>
        <br />
        <Route path="/:id" component={ChordName} />
        <br />
        <div className='container'>
          <div className='columns'>
            <div className='column'>
              <Menu />
            </div>
            <div className='column'>
              <Route exact path='/' component = {() => <ChordContainer chord="Gb"/>}/>
              { chords.map((chord, id) => 
                  <Route path={`/${chord}`} key={id} component = {() => <ChordContainer chord={chord} />} />
              )}
            </div>
          </div>
        </div>
    </div>
    </BrowserRouter>
    );
  }

export default App;

