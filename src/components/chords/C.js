import React, { Component } from 'react';
import Tiles from '../Tiles'

class C extends Component{
    constructor(props){
        super(props);
        const fret1 = 25; const string1= 7 
        const fret2 = 57; const string2 = 27
        const fret3 = 89; const string3 = 46 
        const fret4 = 119; const string4 = 66
        
        this.state  = {
        chords: [
            { name: 'C', x1:string4, y1:fret3},
            { name: 'Cm', x1: string2, y1: fret3, x2: string3, y2:fret3, x3:string4, y3:fret3},
            { name: 'Caug', x1: string1, y1: fret1, x2: string4, y2:fret3},
            { name: 'Cdim', x1: string2, y1: fret3, x2: string3, y2:fret2, x3:string4, y3:fret3},
            { name: 'C7', x1: string4, y1: fret1 },
            { name: 'Cm7',  x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret3, x4:string4, y4:fret3 },
            { name: 'Cmaj7', x1: string4, y1: fret2},
            { name: 'C6', },
            { name: 'Cm6', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret3, x4:string4, y4:fret3},
            { name: 'Cadd9', x1: string2, y1: fret4, x2: string3, y2:fret3, x3:string4, y3:fret3},
            { name: 'Cm9', x1: string1, y1: fret4, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4, y4:fret4, textLower: 3},
            { name: 'C9', x1: string2, y1: fret2, x2: string4, y2:fret1 },
            { name: 'Csus2', x1: string2, y1: fret2, x2: string3, y2:fret3, x3:string4, y3:fret3},
            { name: 'Csus4', x1: string3, y1: fret1, x2: string4, y2:fret3},
            { name: 'C7sus4', x1: string3, y1: fret1, x2: string4, y2:fret1},
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

export default C