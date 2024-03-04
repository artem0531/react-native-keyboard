import React from 'react';
import * as Tone from 'tone';

const App = () => {
  const playSound = () => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease('C4', '8n');
  };

  return (
    <div>
      <button onClick={playSound}>Play Sound</button>
    </div>
  );
};

export default App;