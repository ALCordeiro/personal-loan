import convertCurrency from "../convertCurrency";

describe('convertCurrency', () => {
  it('should return an empty string if value is 0', () => {
    expect(convertCurrency(0)).toBe('');
  });

  it('should return an empty string if value is undefined', () => {
    expect(convertCurrency(undefined as any)).toBe('');
  });

  it('should format the number as USD currency with 2 decimal places', () => {
    expect(convertCurrency(1234.56)).toBe('$1,234.56');
  });

  it('should format the number as USD currency with 2 decimal places for whole numbers', () => {
    expect(convertCurrency(1234)).toBe('$1,234.00');
  });

  it('should format the number as USD currency with 2 decimal places for numbers with more than 2 decimal places', () => {
    expect(convertCurrency(1234.5678)).toBe('$1,234.57');
  });

  it('should format the number as USD currency with 2 decimal places for negative numbers', () => {
    expect(convertCurrency(-1234.56)).toBe('-$1,234.56');
  });
});
