import React, { Dispatch, SetStateAction, useState } from 'react';
import { EridianKeyboard } from '../../components/EridianKeyboard/EridianKeyboard';
import { Input } from '../../shared/Input';
import arrowImg from '../../assets/arrow.svg';

export type ConversionHook = (
  setState: Dispatch<SetStateAction<string>>,
) => (val?: string) => void;

interface IProps {
  firstConversionHook: ConversionHook;
  secondConversionHook: ConversionHook;
  title: string;
  firstLabel: string;
  secondLabel: string;
}

const TwoWayConverter = ({
  firstConversionHook,
  secondConversionHook,
  title,
  firstLabel,
  secondLabel,
}: IProps) => {
  const [firstInputValue, setFirstInputValue] = useState('');
  const [secondInputValue, setSecondInputValue] = useState('');

  const firstConversionFunc = firstConversionHook(
    setSecondInputValue,
  );
  const secondConversionFunc = secondConversionHook(
    setFirstInputValue,
  );

  const [isFirstToSecond, setIsFirstToSecond] = useState(true);

  const convertValues = () => {
    if (isFirstToSecond) {
      firstConversionFunc(firstInputValue);
    } else {
      secondConversionFunc(secondInputValue);
    }
  };

  return (
    <div className="bg-white shadow-md flex flex-col rounded px-8 pt-6 pb-8 mb-4 w-full">
      <h1 className="">{title}</h1>
      <div className="grid grid-cols-7 gap-4">
        <div
          className={`col-span-3 ${
            isFirstToSecond ? 'bg-orange-500' : ''
          }`}
        >
          <Input
            label={firstLabel}
            value={firstInputValue}
            onChange={(e) => setFirstInputValue(e.target.value)}
          ></Input>
        </div>
        <div className="flex flex-col content-center justify-around p-4">
          <button
            className="btn btn-red"
            onClick={() => setIsFirstToSecond(!isFirstToSecond)}
          >
            {' '}
            Switch{' '}
          </button>
          <img
            className={`h-10 w-full ${
              !isFirstToSecond ? 'rotate-180' : ''
            }`}
            src={arrowImg}
            alt="switch-arrow"
          />
        </div>
        <div
          className={`col-span-3 ${
            !isFirstToSecond ? 'bg-indigo-500' : ''
          }`}
        >
          <Input
            label={secondLabel}
            value={secondInputValue}
            onChange={(e) => setSecondInputValue(e.target.value)}
          />
          <EridianKeyboard
            onClick={(value: string) =>
              setSecondInputValue(secondInputValue + value)
            }
            clearFunction={() => setSecondInputValue('')}
            // styles={{buttonClass:"btn"}}
          />
        </div>
      </div>
      <div className="flex w-full justify-center align-center">
        <button className="btn btn-blue" onClick={convertValues}>
          {' '}
          Convert{' '}
        </button>
      </div>
    </div>
  );
};

export default TwoWayConverter;
