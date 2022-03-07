import react from 'React';
import { ER_DIGITS } from '../../constants';
import { Keyboard } from '../../shared/Keyboard/Keyboard';

interface IProps {
  onClick: (digit: string) => void;
  clearFunction?: () => void;
}

const styles = {
  buttonClass: 'btn btn-green',
};

export const EridianKeyboard = ({
  onClick,
  clearFunction,
}: IProps) => {
  const symbolKeys = ER_DIGITS.map((d) => (
    <button className={styles.buttonClass} onClick={() => onClick(d)}>
      {d}
    </button>
  ));

  const deleteKey =
    clearFunction != undefined ? (
      <button className={styles.buttonClass} onClick={clearFunction}>
        Clear
      </button>
    ) : undefined;

  return (
    <div>
      <Keyboard
        keys={deleteKey ? [...symbolKeys, deleteKey] : symbolKeys}
      />
    </div>
  );
};
