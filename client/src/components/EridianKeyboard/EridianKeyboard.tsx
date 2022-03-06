import react from 'React';
import { ER_DIGITS } from '../../constants';
import { Button } from '../../shared/Button';
import { Keyboard } from '../../shared/Keyboard/Keyboard';
import styles from './EridianKeyboard.module.css';

export const EridianKeyboard = () => {
  const keys = ER_DIGITS.map((d) => (
    <button
      className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => console.log('hello')}
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
