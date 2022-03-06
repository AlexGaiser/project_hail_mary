import { ER_DIGITS_DICT } from '../constants';

export const isValidEridianString = (str: string): boolean => {
  for (const c of str) {
    if (!ER_DIGITS_DICT[c] && ER_DIGITS_DICT[c] !== 0) {
      return false;
    }
  }
  return true;
};
