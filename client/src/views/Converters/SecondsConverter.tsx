import React, { useState } from 'react';
import { EridianKeyboard } from '../../components/EridianKeyboard/EridianKeyboard';
import { Input } from '../../shared/Input';

const SecondsConverter = () => {
  const [humanInputValue, setHumanInputValue] = useState('');
  const [eridianInputValue, setEridianInputValue] = useState('');
  return (
    <div>
      <h1>Seconds Converter</h1>

      <Input
        label="Human"
        value={humanInputValue}
        onChange={(e) => setHumanInputValue(e.target.value)}
      ></Input>
      <Input
        label="Eridian"
        value={eridianInputValue}
        onChange={(e) => setEridianInputValue(e.target.value)}
      />
      <EridianKeyboard
        onClick={(value: string) =>
          setEridianInputValue(eridianInputValue + value)
        }
      />
    </div>
  );
};

export default SecondsConverter;
