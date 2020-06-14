import React, { useState, useEffect } from 'react';


const ChordName = ({ match }) => {

  useEffect(() => {
    document.title = `Ukulele Chords (${match.params.id})`;
  });

  return (
    <div>
      <p className="text-2xl text-center text-menu-color mt-4">Chord Family - <span className="text-green-300 text-md">{match.params.id}</span></p>
    </div>
  )
}

export default ChordName;