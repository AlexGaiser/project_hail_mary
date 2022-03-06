import { isValidEridianString } from '../validation.service';

describe('testing eridian validation service', () => {
  test('should validate string against eridian digits', () => {
    expect(isValidEridianString('123')).toBe(false);
    expect(isValidEridianString('VVVℓℓ+∀+λ')).toBe(true);
    expect(isValidEridianString('VVVℓℓ+∀+λ1')).toBe(false);
    expect(isValidEridianString('')).toBe(true);
  });
});
