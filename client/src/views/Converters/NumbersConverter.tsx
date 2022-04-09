import React, { useState } from 'react';
import {
  fetchEridianNumberToHuman,
  fetchHumanNumberToEridian,
} from '../../services/api/conversion.service';
import TwoWayConverter, { ConversionHook } from './TwoWayConverter';

const useConvertToHumanNumber: ConversionHook =
  (setState) =>
  (val = '') => {
    const convertFunc = (input: string): void => {
      fetchHumanNumberToEridian(parseInt(input)).then((res) =>
        setState(res.data.value),
      );
    };
    convertFunc(val);
  };

const useConvertToEridianNumber: ConversionHook =
  (setState: React.Dispatch<React.SetStateAction<string>>) =>
  (val = '') => {
    const convertFunc = (input: string): void => {
      fetchEridianNumberToHuman(input).then((res) =>
        setState(res.data.value),
      );
    };
    convertFunc(val);
  };
const NumbersConverter = () => {
  return (
    <TwoWayConverter
      title="Number Converter"
      firstLabel="Human"
      secondLabel="Eridian"
      firstConversionHook={useConvertToHumanNumber}
      secondConversionHook={useConvertToEridianNumber}
    />
  );
};
export default NumbersConverter;
