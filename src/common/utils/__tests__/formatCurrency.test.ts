import formatCurrency from "../formatCurrency";

describe('formatCurrency', () => {
  it('should return an empty string for an empty input', () => {
    expect(formatCurrency('')).toBe('');
  });

  it('should return an empty string for a non-numeric input', () => {
    expect(formatCurrency('abc')).toBe('');
  });

  it('should correctly format a numeric string', () => {
    expect(formatCurrency('1234.56')).toBe('$1,234.56');
  });

  it('should correctly format a string with non-numeric characters', () => {
    expect(formatCurrency('$1,234.56')).toBe('$1,234.56');
  });

  it('should correctly format a negative number', () => {
    expect(formatCurrency('-1234.56')).toBe('-$1,234.56');
  });

  it('should correctly format a string with mixed characters', () => {
    expect(formatCurrency('abc$1,234.56xyz')).toBe('$1,234.56');
  });
});
