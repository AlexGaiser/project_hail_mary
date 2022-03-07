export const ER_DIGITS = ['ℓ', 'I', 'V', 'λ', '+', '∀'];

export const ER_DIGITS_DICT = ER_DIGITS.reduce(
  (obj, v, i) => {
    obj[v] = i;
    return obj;
  },
  {} as {
    [index: string]: number;
  },
);
