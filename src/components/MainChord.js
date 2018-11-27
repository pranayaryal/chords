
import React, { Component } from 'react';
import ChordContainer from './ChordContainer'
import data from '../data'

class MainChord extends Component{
    constructor(props){
        super(props);

        console.log(props.chord)
        
        this.state  = {
            chords: data[props.chord]
        }
        console.log(this.state.chords)

    }

    render(){
        return (
            <div>
              <ChordContainer chords={this.state.chords.slice(0,6)} />
              <ChordContainer chords={this.state.chords.slice(6,12)} />
              <ChordContainer chords={this.state.chords.slice(12,15)} />
            </div>   
        );
    }
}

export default MainChord