import react from 'React';
import { ER_DIGITS } from '../../constants';
import { Keyboard } from '../../shared/Keyboard/Keyboard';

type StyleObject = {
  buttonClass: string;
};

interface IProps {
  onClick: (digit: string) => void;
  clearFunction?: () => void;
  styles?: StyleObject;
}

const defaultStyles: StyleObject = {
  buttonClass: 'btn btn-green m-0.5 h-10 w-10',
};

export const EridianKeyboard = ({
  onClick,
  clearFunction,
  styles,
}: IProps) => {
  const { buttonClass } = {
    ...defaultStyles,
    ...styles,
  };

  const symbolKeys = ER_DIGITS.map((d) => (
    <button className={`${buttonClass}`} onClick={() => onClick(d)}>
      {d}
    </button>
  ));

  const deleteKey =
    clearFunction != undefined ? (
      <button
        className={`${buttonClass} w-20`}
        onClick={clearFunction}
      >
        Clear
      </button>
    ) : undefined;

  return (
    <Keyboard
      keys={deleteKey ? [...symbolKeys, deleteKey] : symbolKeys}
    />
  );
};
