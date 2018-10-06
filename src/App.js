import React, { Component } from 'react';
import Hero from './components/Hero';
import Chord from './components/Chord'
import Tiles from './components/Tiles';

// import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <Hero/>
         <br /> 
         <br />
        <Tiles />
    </div>
    );
  }
}

export default App;
