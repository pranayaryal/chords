import React, { useState, useEffect } from 'react';


const ChordName = ({ match }) => {

  useEffect(() => {
    document.title = `Ukulele Chords (${match.params.id})`;
  });

  return (
    <div>
      <p className="text-2xl text-center text-gray-800 mt-4">Chord Family - <span className="text-gray-500 text-md">{match.params.id}</span></p>
    </div>
  )
}

export default ChordName;