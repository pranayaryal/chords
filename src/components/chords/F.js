import React, { Component } from 'react';
import Tiles from '../Tiles'

class F extends Component{
    constructor(props){
        super(props);
        const fret1 = 25; const string1= 7 
        const fret2 = 57; const string2 = 27
        const fret3 = 89; const string3 = 46 
        const fret4 = 119; const string4 = 66
        
        this.state  = {
        chords: [
            { name: 'F', x1:string1, y1:fret2, x2:string3, y2:fret1},
            { name: 'Fm', x1:string1, y1:fret1, x2:string3, y2:fret1, x3:string4, y3:fret3},
            { name: 'Faug', x1:string1, y1:fret2, x2:string2, y2:fret1, x3:string3, y3:fret1},
            { name: 'Fdim', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4:fret2 },
            { name: 'F7', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Fm7', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Fmaj7', x1: string1, y1: fret2, x2: string2, y2:fret4, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'F6', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Fm6', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4:fret3 },
            { name: 'Fadd9', x1: string3, y1: fret1},
            { name: 'Fm9', x1:string2, y1:fret4, x2:string3, y2:fret3, x3:string4, y3:fret2, textLower: 3},
            { name: 'F9', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret3, x4:string4, y4:fret3 },
            { name: 'Fsus2', x1: string3, y1: fret1, x2: string4, y2:fret3},
            { name: 'Fsus4', x1: string1, y1: fret3, x2: string3, y2:fret1, x3:string4, y3:fret1},
            { name: 'F7sus4', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4, y4:fret3, textLower: 5 },
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

export default F