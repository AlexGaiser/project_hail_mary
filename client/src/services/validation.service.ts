import { ER_DIGITS_DICT } from '../constants';

const numberRegex = /^-?\d*\.?\d*$/;

export const isValidEridianString = (str: string): boolean => {
  for (const c of str) {
    if (!ER_DIGITS_DICT[c] && ER_DIGITS_DICT[c] !== 0) {
      return false;
    }
  }
  return true;
};

export const isValidHumanNumber = (num: number | string) => {
  if (typeof num === 'string') return numberRegex.test(num); // ...and ensure strings of whitespace fail
  return true;
};
