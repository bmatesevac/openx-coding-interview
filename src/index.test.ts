import * as sut from './index';

describe('testFunction', () => {
  it('should double the input number', () => {
    expect(sut.testFunction(2)).toBe(4);
  });

});
