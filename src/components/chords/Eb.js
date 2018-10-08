import React, { Component } from 'react';
import Tiles from '../Tiles'

class Eb extends Component{
    constructor(props){
        super(props);
        const fret1 = 25; const string1= 7 
        const fret2 = 57; const string2 = 27
        const fret3 = 89; const string3 = 46 
        const fret4 = 119; const string4 = 66
        
        this.state  = {
        chords: [
            { name: 'Eb', x1:string2, y1:fret3, x2:string3, y2:fret3, x3:string4, y3:fret1},
            { name: 'Ebm', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4,y4:fret1},
            { name: 'Ebaug', x1: string2, y1: fret3, x2: string3, y2:fret3, x3:string4, y3:fret2},
            { name: 'Ebdim', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret2},
            { name: 'Eb7', x1: string1, y1: fret3, x2: string2, y2: fret3, x3:string3, y3:fret3, x4:string4,y4:fret4 },
            { name: 'Ebm7', x1: string1, y1: fret3, x2: string2, y2: fret3, x3:string3, y3:fret2, x4:string4,y4:fret4 },
            { name: 'Ebmaj7', x1: string1, y1: fret2, x2: string2, y2: fret2, x3:string3, y3:fret2, x4:string4,y4:fret4, textLower: 3 },
            { name: 'Eb6', x1: string1, y1: fret2, x2: string2, y2: fret2, x3:string3, y3:fret2, x4:string4,y4:fret2 },
            { name: 'Ebm6', x1: string1, y1: fret3, x2: string2, y2: fret3, x3:string3, y3:fret2, x4:string4,y4:fret3 },
            { name: 'Ebadd9', x1: string2, y1: fret3, x2: string3, y2:fret1, x3:string4, y3:fret1 },
            { name: 'Ebm9', x1: string1, y1: fret1, x2: string3, y2:fret3, x3:string4, y3:fret4, textLower: 4},
            { name: 'Eb9', x1: string2, y1: fret1, x2: string3, y2:fret1, x3:string4, y3:fret1},
            { name: 'Ebsus2', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4,y4:fret4 },
            { name: 'Ebsus4', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4,y4:fret1 },
            { name: 'Eb7sus4', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4,y4:fret3, textLower: 3 },
        ]
        }

    }

    render(){
        return (
            <div>
              <Tiles chords={this.state.chords.slice(0,6)} clicked={this.clickTile}/>
              <Tiles chords={this.state.chords.slice(6,12)} clicked={this.clickTile}/>
              <Tiles chords={this.state.chords.slice(12,15)} clicked={this.clickTile}/>
            </div>   
        );
    }
}

export default Eb