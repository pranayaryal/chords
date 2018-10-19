import React, { Component } from 'react';
import Hero from './components/Hero';
import Tiles from './components/Tiles';
import Nav from './components/Nav'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Gb from './components/chords/Gb'
import G from './components/chords/G'
import Ab from './components/chords/Ab'
import A from './components/chords/A'
import Bb from './components/chords/Bb'
import B from './components/chords/B'
import C from './components/chords/C'
import Db from './components/chords/Db'
import D from './components/chords/D'
import Eb from './components/chords/Eb'
import E from './components/chords/E'
import F from './components/chords/F'

// import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.clickTile = this.clickTile.bind(this)
    const fret1 = 25; const string1= 7 
    const fret2 = 57; const string2 = 27
    const fret3 = 89; const string3 = 46 
    const fret4 = 119; const string4 = 66
    
    this.state  = {
      chords: [
        { name: 'Gb', x1:string2, y1:fret1, x2:string3, y2:fret2, x3:string4, y3:fret1, x4:string1, y4: fret3  },
        { name: 'Gbm', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string3, y3:fret2 },
        { name: 'Gbaug', x1: string1, y1: fret3, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4,y4:fret1 },
        { name: 'Gbdim', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4,y4:fret3 },
        { name: 'Gb7', x1: string1, y1: fret3, x2: string2, y2: fret4, x3:string3, y3:fret2, x4:string4,y4:fret4 },
        { name: 'Gbm7', x1: string1, y1: fret2, x2: string2, y2:fret4, x3:string3, y3:fret2, x4:string4,y4:fret4 },
        { name: 'Gbmaj7', x1: string1, y1: fret2, x2: string2, y2:fret4, x3:string3, y3:fret1, x4:string4, y4:fret3 },
        { name: 'Gb6', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4, y4:fret4 },
        { name: 'Gbm6', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret3 },
        { name: 'Gbadd9', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret1 },
        { name: 'Gbm9', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret2 },
        { name: 'Gb9', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string4, y3:fret1 },
        { name: 'Gbsus2', x1: string1, y1: fret1, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret4 },
        { name: 'Gbsus4', x1: string1, y1: fret4, x2: string2, y2:fret1, x3:string3, y3:fret2, x4:string4, y4:fret2 },
        { name: 'Gb7sus4', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4, y4:fret3 },
      ]
    }
  }

  clickTile = val => {
    console.log('you clicked it');
  }

  render() {
    return (
    <BrowserRouter>
      <div>
        <br />
        <Route path="/:id" component={Nav} />
        <br />
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-fifth'>
              {/* <Menu /> */}
              <Menu chords={this.state.chords}/>
            </div>
            <div className='column'>
              <Route exact={true} path='/' component={Gb}/>
              <Route exact={true} path='/Gb' component={Gb}/>
              <Route exact={true} path='/G' component={G}/>
              <Route exact={true} path='/Ab' component={Ab}/>
              <Route exact={true} path='/A' component={A}/>
              <Route exact={true} path='/Bb' component={Bb}/>
              <Route exact={true} path='/B' component={B}/>
              <Route exact={true} path='/C' component={C}/>
              <Route exact={true} path='/Db' component={Db}/>
              <Route exact={true} path='/D' component={D}/>
              <Route exact={true} path='/Eb' component={Eb}/>
              <Route exact={true} path='/E' component={E}/>
              <Route exact={true} path='/F' component={F}/>
            </div>
          </div>
        </div>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
