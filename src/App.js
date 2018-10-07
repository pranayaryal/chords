import React, { Component } from 'react';
import Hero from './components/Hero';
import Tiles from './components/Tiles';
// import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.clickTile = this.clickTile.bind(this)
    this.state  = {
      chords: [
        { name: 'Gb', x1:27, y1:25, x2:46, y2:57, x3:66, y3:25, x4:7, y4: 89  },
        { name: 'Gbm', x1: 27, y1: 25, x2: 7, y2:55, x3:46, y3:57 },
        { name: 'Gbaug', x1: 27, y1: 57, x2: 46, y2:57, x3:66, y3:25, x4:7,y4:89 },
        { name: 'Gbdim', x1: 7, y1: 57, x2: 46, y2:57, x3:66, y3:89, x4:27,y4:89 },
        { name: 'Gb7', x1: 27, y1: 25, x2: 46, y2:47, x3:66, y3:25, x4:7,y4:89 },
        { name: 'Gbm7', x1: 27, y1: 25, x2: 46, y2:47, x3:66, y3:25, x4:7,y4:89 },
        { name: 'Gbmaj7', x1: 27, y1: 25, x2: 46, y2:47, x3:66, y3:25, x4:7, y4:66 }
      ]
    }
  }

  clickTile = val => {
    console.log('you clicked it');
  }

  render() {
    return (
      <div>
        <Hero/>
         <br /> 
         <br />
          <Tiles chords={this.state.chords} clicked={this.clickTile}/>
        <Tiles chords={this.state.chords} clicked={this.clickTile}/>
        <Tiles chords={this.state.chords} clicked={this.clickTile}/>
    </div>
    );
  }
}

export default App;
