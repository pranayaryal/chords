import React, { Component } from 'react';
import Tiles from '../Tiles'

class A extends Component{
    constructor(props){
        super(props);
        const fret1 = 25; const string1= 7 
        const fret2 = 57; const string2 = 27
        const fret3 = 89; const string3 = 46 
        const fret4 = 119; const string4 = 66
        
        this.state  = {
        chords: [
            { name: 'A', x1:string1, y1:fret2, x2:string2, y2:fret1 },
            { name: 'Am', x1: string1, y1: fret2},
            { name: 'Aaug', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string3, y3:fret1, x4:string4,y4:fret4 },
            { name: 'Adim', x1: string1, y1: fret2, x2: string2, y2:fret3, x3:string3, y3:fret2, x4:string4,y4:fret3 },
            { name: 'A7', x1: string2, y1: fret1 },
            { name: 'Am7',  },
            { name: 'Amaj7', x1: string1, y1: fret1, x2: string2, y2:fret1},
            { name: 'A6', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string3, y3:fret2 },
            { name: 'Am6', x1: string1, y1: fret2, x2: string3, y2:fret2},
            { name: 'Aadd9', x1: string1, y1: fret2, x2: string2, y2:fret1, x3:string4, y3:fret2},
            { name: 'Am9', x1: string1, y1: fret2, x2: string4, y2:fret2},
            { name: 'A9', x1: string2, y1: fret1, x2: string4, y2:fret2 },
            { name: 'Asus2', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret1, textLower: 3 },
            { name: 'Asus4', x1: string1, y1: fret2, x2: string2, y2:fret2},
            { name: 'A7sus4', x1: string2, y1: fret2},
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

export default A