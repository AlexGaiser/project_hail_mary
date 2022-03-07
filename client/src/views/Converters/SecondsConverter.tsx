import React, { useState } from 'react';
import { EridianKeyboard } from '../../components/EridianKeyboard/EridianKeyboard';
import {
  fetchEridianNumberToHuman,
  fetchHumanNumberToEridian,
} from '../../services/api/conversion.service';
import { Input } from '../../shared/Input';

const SecondsConverter = () => {
  const [humanInputValue, setHumanInputValue] = useState('');
  const [eridianInputValue, setEridianInputValue] = useState('');

  const [isHumanToEridian, setIsHumantoEridian] = useState(true);
  const convertSeconds = async () => {
    if (isHumanToEridian) {
      fetchHumanNumberToEridian(parseInt(humanInputValue)).then(
        (res) => {
          setEridianInputValue(res.data.value);
        },
      );
    } else {
      fetchEridianNumberToHuman(eridianInputValue).then((res) => {
        setHumanInputValue(res.data.value);
      });
    }
  };
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full">
      <h1 className="">Seconds Converter</h1>
      <div className={`${isHumanToEridian ? 'bg-orange-500' : ''}`}>
        <Input
          label="Human"
          value={humanInputValue}
          onChange={(e) => setHumanInputValue(e.target.value)}
        ></Input>
      </div>
      <button
        className="btn btn-red"
        onClick={() => setIsHumantoEridian(!isHumanToEridian)}
      >
        {' '}
        Switch{' '}
      </button>
      <button
        className="btn btn-blue"
        onClick={() => convertSeconds()}
      >
        {' '}
        Convert{' '}
      </button>
      <div className={`${!isHumanToEridian ? 'bg-indigo-500' : ''}`}>
        <Input
          label="Eridian"
          value={eridianInputValue}
          onChange={(e) => setEridianInputValue(e.target.value)}
        />
      </div>

      <EridianKeyboard
        onClick={(value: string) =>
          setEridianInputValue(eridianInputValue + value)
        }
        clearFunction={() => setEridianInputValue('')}
      />
    </div>
  );
};

export default SecondsConverter;
