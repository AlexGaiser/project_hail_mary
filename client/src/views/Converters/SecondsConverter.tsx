import React, { useState } from 'react';
import { EridianKeyboard } from '../../components/EridianKeyboard/EridianKeyboard';
import {
  fetchEridianNumberToHuman,
  fetchHumanNumberToEridian,
} from '../../services/api/conversion.service';
import { Input } from '../../shared/Input';
import arrowImg from '../../assets/arrow.svg';

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
    <div className="bg-white shadow-md flex flex-col rounded px-8 pt-6 pb-8 mb-4 w-full">
      <h1 className="">Seconds Converter</h1>
      <div className="grid grid-cols-7 gap-4">
        <div
          className={`col-span-3 ${
            isHumanToEridian ? 'bg-orange-500' : ''
          }`}
        >
          <Input
            label="Human"
            value={humanInputValue}
            onChange={(e) => setHumanInputValue(e.target.value)}
          ></Input>
        </div>
        <div className="flex flex-col align-center p-4">
          <button
            className="btn btn-red"
            onClick={() => setIsHumantoEridian(!isHumanToEridian)}
          >
            {' '}
            Switch{' '}
          </button>
          {/* <img className="" src={arrowImg} alt="switch-arrow" /> */}
        </div>
        <div
          className={`col-span-3 ${
            !isHumanToEridian ? 'bg-indigo-500' : ''
          }`}
        >
          <Input
            label="Eridian"
            value={eridianInputValue}
            onChange={(e) => setEridianInputValue(e.target.value)}
          />
          <EridianKeyboard
            onClick={(value: string) =>
              setEridianInputValue(eridianInputValue + value)
            }
            clearFunction={() => setEridianInputValue('')}
            // styles={{buttonClass:"btn"}}
          />
        </div>
      </div>
      <div className="flex w-full justify-center align-center">
        <button
          className="btn btn-blue"
          onClick={() => convertSeconds()}
        >
          {' '}
          Convert{' '}
        </button>
      </div>
    </div>
  );
};

export default SecondsConverter;
