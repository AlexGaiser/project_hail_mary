import React, { useEffect } from 'react';
// import './App.css';
import { fetchHumanNumberToEridian } from './services/api/conversion.service';
import SecondsConverter from './views/Converters/SecondsConverter';

function App() {
  return (
    <div className="App p-10">
      <h1 className="text-3xl font-bold underline">
        Human Eridian Conversion Tool
      </h1>
      <div className="w-1/2 p-10">
        <SecondsConverter />
      </div>
    </div>
  );
}

export default App;
