import { testFunction } from './index';

describe('testFunction', () => {
  it('should double the input number', () => {
    expect(testFunction(2)).toBe(4);
    expect(testFunction(5)).toBe(10);
    expect(testFunction(0)).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(testFunction(-3)).toBe(-6);
    expect(testFunction(-10)).toBe(-20);
  });

  it('should handle decimal numbers', () => {
    expect(testFunction(2.5)).toBe(5);
    expect(testFunction(1.5)).toBe(3);
  });
});
