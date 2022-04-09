import {
  fetchEridianAtmospheresToHuman,
  fetchEridianSecondsToHuman,
  fetchHumanAtmospheresToEridian,
  fetchHumanSecondsToEridian,
} from '../../services/api/conversion.service';
import TwoWayConverter, { ConversionHook } from './TwoWayConverter';

const AtmospheresConverter = () => {
  const useConvertToHumanAtmospheres: ConversionHook =
    (setState) =>
    (val = '') => {
      const convertFunc = (input: string): void => {
        fetchHumanAtmospheresToEridian(parseInt(input)).then((res) =>
          setState(res.data.value),
        );
      };
      convertFunc(val);
    };
  const useConvertToEridianAtmospheres: ConversionHook =
    (setState) =>
    (val = '') => {
      const convertFunc = (input: string): void => {
        fetchEridianAtmospheresToHuman(parseInt(input)).then((res) =>
          setState(res.data.value),
        );
      };
      convertFunc(val);
    };

  return (
    <TwoWayConverter
      firstLabel="Human"
      secondLabel="Eridian"
      title="Atmospheres Converter"
      firstConversionHook={useConvertToHumanAtmospheres}
      secondConversionHook={useConvertToEridianAtmospheres}
    />
  );
};

export default AtmospheresConverter;
