import React, { Component } from 'react';
import ChordName from './components/ChordName'
import { BrowserRouter, Route } from 'react-router-dom'
import Menu from './components/Menu'
import MainChord from './components/MainChord'

import data from './data'

// import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    const { Gb } = data
    this.clickTile = this.clickTile.bind(this)
    
    this.state  = {
      chords: [
        Gb
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
        <Route path="/:id" component={ChordName} />
        <br />
        <div className='container'>
          <div className='columns'>
            <div className='column is-one-fifth'>
              <Menu />
            </div>
            <div className='column'>
              <Route exact path='/' component = {() => <MainChord chord="Gb"/>}/>
              <Route path='/Gb' component = {() => <MainChord chord="Gb"/>}/>
              <Route path='/G' component = {() => <MainChord chord="G"/>}/>
              <Route path='/Ab' component = {() => <MainChord chord="Ab"/>}/>
              <Route path='/A' component = {() => <MainChord chord="A"/>}/>
              <Route path='/Bb' component = {() => <MainChord chord="Bb"/>}/>
              <Route path='/B' component = {() => <MainChord chord="B"/>}/>
              <Route path='/C' component = {() => <MainChord chord="C"/>}/>
              <Route path='/Db' component = {() => <MainChord chord="Db"/>}/>
              <Route path='/D' component = {() => <MainChord chord="D"/>}/>
              <Route path='/Eb' component = {() => <MainChord chord="Eb"/>}/>
              <Route path='/F' component = {() => <MainChord chord="F"/>}/>
              <Route path='/E' component = {() => <MainChord chord="E"/>}/>
            </div>
          </div>
        </div>
    </div>
    </BrowserRouter>
    );
  }
}

export default App;
