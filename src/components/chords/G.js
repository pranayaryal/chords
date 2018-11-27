import React, { Component } from 'react';
import Tiles from '../Tiles'

class G extends Component{
    constructor(props){
        super(props);
        const fret1 = 25; const string1= 7 
        const fret2 = 57; const string2 = 27
        const fret3 = 89; const string3 = 46 
        const fret4 = 119; const string4 = 66
        
        this.state  = {
        chords: [
            { name: 'G', x1:string2, y1:fret2, x2:string3, y2:fret3, x3:string4, y3:fret2  },
            { name: 'Gm', x1: string2, y1: fret2, x2: string3, y2:fret3, x3:string4, y3:fret1 },
            { name: 'Gaug', x1: string2, y1: fret3, x2: string3, y2:fret3, x3:string4, y3:fret2 },
            { name: 'Gdim', x1: string2, y1: fret1, x2: string3, y2:fret3, x3:string4, y3:fret1 },
            { name: 'G7', x1: string2, y1: fret2, x2: string3, y2: fret1, x3:string4, y3:fret2 },
            { name: 'Gm7', x1: string2, y1: fret2, x2: string3, y2:fret1, x3:string4, y3:fret1 },
            { name: 'Gmaj7', x1: string2, y1: fret2, x2: string3, y2:fret2, x3:string4, y3:fret2 },
            { name: 'G6', x1: string2, y1: fret2, x2: string4, y2:fret2},
            { name: 'Gm6', x1: string2, y1: fret2, x2: string4, y2:fret1 },
            { name: 'Gadd9', x1: string2, y1: fret1, x2: string3, y2:fret4, x3:string4, y3:fret1, textLower: 3},
            { name: 'Gm9', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret3, x4:string4, y4:fret1 },
            { name: 'G9', x1: string1, y1: fret2, x2: string2, y2:fret2, x3:string3, y3:fret1, x4:string4, y4:fret2 },
            { name: 'Gsus2', x1: string2, y1: fret2, x2: string3, y2:fret3 },
            { name: 'Gsus4', x1: string2, y1: fret2, x2: string3, y2:fret3, x3:string4, y3:fret3 },
            { name: 'G7sus4', x1: string2, y1: fret2, x2: string3, y2:fret1, x3:string4, y3:fret3 },
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

export default G