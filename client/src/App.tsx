import React, { useEffect } from 'react';
// import './App.css';
import NumbersConverter from './views/Converters/NumbersConverter';
import SecondsConverter from './views/Converters/SecondsConverter';

function App() {
  return (
    <div className="App p-10">
      <h1 className="text-3xl font-bold underline">
        Human Eridian Conversion Tool
      </h1>
      <div className="p-10">
        <SecondsConverter />
        <NumbersConverter />
      </div>
    </div>
  );
}

export default App;
