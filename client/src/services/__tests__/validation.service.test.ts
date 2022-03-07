import {
  isValidEridianString,
  isValidHumanNumber,
} from '../validation.service';

describe('testing eridian validation service', () => {
  test('should validate string against eridian digits', () => {
    expect(isValidEridianString('123')).toBe(false);
    expect(isValidEridianString('VVVℓℓ+∀+λ')).toBe(true);
    expect(isValidEridianString('VVVℓℓ+∀+λ1')).toBe(false);
    expect(isValidEridianString('')).toBe(true);
  });
});

describe('validation of human number input', () => {
  test('should test if string or numbers are valid', () => {
    expect(isValidHumanNumber('123')).toBe(true);
    expect(isValidHumanNumber('abc123')).toBe(false);
    expect(isValidHumanNumber(12345)).toBe(true);
    expect(isValidHumanNumber('')).toBe(true);
    expect(isValidHumanNumber(-12345)).toBe(true);
    expect(isValidHumanNumber(123.45)).toBe(true);
    expect(isValidHumanNumber('-123.45')).toBe(true);
    expect(isValidHumanNumber('12345.3d')).toBe(false);
    expect(isValidHumanNumber('1e10000')).toBe(false);
  });
});
