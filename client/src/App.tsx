import React, { useEffect } from 'react';
import './App.css';
import { EridianClock } from './components/EridianClock';
import { EridianKeyboard } from './components/EridianKeyboard';
import { fetchHumanNumberToEridian } from './services/converters.service';
import { Input } from './shared/Input';

function App() {
  useEffect(() => {
    fetchHumanNumberToEridian(123).then((data) => console.log(data));
  });

  return (
    <div className="App">
      <h1>Human Eridian Conversion Tool</h1>
      <h2>Eridian Keyboard</h2>
      <EridianKeyboard />
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
