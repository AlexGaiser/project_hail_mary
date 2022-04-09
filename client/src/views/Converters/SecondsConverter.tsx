import React, { useState } from 'react';
import { EridianKeyboard } from '../../components/EridianKeyboard/EridianKeyboard';
import {
  fetchEridianSecondsToHuman,
  fetchHumanSecondsToEridian,
} from '../../services/api/conversion.service';
import { Input } from '../../shared/Input';
import arrowImg from '../../assets/arrow.svg';
import TwoWayConverter, { ConversionHook } from './TwoWayConverter';

const SecondsConverter = () => {
  const useConvertToHumanSeconds: ConversionHook =
    (setState) =>
    (val = '') => {
      const convertFunc = (input: string): void => {
        fetchHumanSecondsToEridian(parseInt(input)).then((res) =>
          setState(res.data.value),
        );
      };
      convertFunc(val);
    };
  const useConvertToEridianSeconds: ConversionHook =
    (setState) =>
    (val = '') => {
      const convertFunc = (input: string): void => {
        fetchEridianSecondsToHuman(input).then((res) =>
          setState(res.data.value),
        );
      };
      convertFunc(val);
    };

  return (
    <TwoWayConverter
      firstLabel="Human"
      secondLabel="Eridian"
      title="Seconds Converter"
      firstConversionHook={useConvertToHumanSeconds}
      secondConversionHook={useConvertToEridianSeconds}
    />
  );
};

export default SecondsConverter;
