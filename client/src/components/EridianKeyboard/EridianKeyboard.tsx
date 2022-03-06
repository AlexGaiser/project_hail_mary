import react from 'React';
import { ER_DIGITS } from '../../constants';
import { Keyboard } from '../../shared/Keyboard/Keyboard';

interface IProps {
  onClick: (digit: string) => void;
}

export const EridianKeyboard = ({ onClick }: IProps) => {
  const keys = ER_DIGITS.map((d) => (
    <button
      className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => onClick(d)}
    >
      {d}
    </button>
  ));

  return (
    <div>
      <Keyboard keys={keys} />
    </div>
  );
};
