import React, { useEffect } from 'react';
import './App.css';
import { EridianClock } from './components/EridianClock';
import { fetchHumanNumberToEridian } from './services/converters.service';
import { Input } from './shared/Input';
import SecondsConverter from './views/Converters/SecondsConverter';

function App() {
  useEffect(() => {
    fetchHumanNumberToEridian(123).then((data) => console.log(data));
  });

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
        Human Eridian Conversion Tool
      </h1>
      <SecondsConverter />

      <h2>Eridian Clock</h2>
      <EridianClock />
      <h2>Converters</h2>

      <Input
        label="numbers"
        value="1234"
        onChange={() => console.log('hello')}
      />
    </div>
  );
}

export default App;
