import React, { Component } from 'react';
import Tiles from '../Tiles'

class E extends Component{
    constructor(props){
        super(props);
        const fret1 = 25; const string1= 7 
        const fret2 = 57; const string2 = 27
        const fret3 = 89; const string3 = 46 
        const fret4 = 119; const string4 = 66
        
        this.state  = {
        chords: [
            { name: 'E', x1:string1, y1:fret1, x2:string2, y2:fret4, x3:string4, y3:fret2},
            { name: 'Em', x1:string2, y1:fret4, x2:string3, y2:fret3, x3:string4, y3:fret2},
            { name: 'Eaug', x1: string1, y1: fret1, x2: string4, y2:fret3},
            { name: 'Edim', x1: string2, y1: fret1, x2: string4, y2:fret1},
            { name: 'E7', x1:string1, y1:fret1, x2:string2, y2:fret2, x3:string4, y3:fret2},
            { name: 'Em7', x1: string2, y1: fret2, x2: string4, y2:fret2},
            { name: 'Emaj7', x1:string1, y1:fret1, x2:string2, y2:fret3, x3:string4, y3:fret2},
            { name: 'E6', x1: string1, y1: fret4, x2: string2, y2:fret4, x3:string3, y3:fret4, x4:string4, y4:fret4 },
            { name: 'Em6', x1: string2, y1: fret1, x2: string4, y2:fret2},
            { name: 'Eadd9', x1: string1, y1: fret1, x2: string2, y2:fret4, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'Em9', x1:string2, y1:fret4, x2:string3, y2:fret2, x3:string4, y3:fret2},
            { name: 'E9', x1: string1, y1: fret1, x2: string2, y2:fret2, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'Esus2', x1: string1, y1: fret4, x2: string2, y2:fret4, x3:string3, y3:fret2, x4:string4, y4:fret2 },
            { name: 'Esus4', x1: string1, y1: fret1, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret1, textLower: 3 },
            { name: 'E7sus4', x1: string1, y1: fret3, x2: string2, y2:fret3, x3:string3, y3:fret4, x4:string4, y4:fret4, textLower: 3 },
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

export default E