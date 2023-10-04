import { it, expect } from 'vitest';
import { add } from './math';

// it('should summarize all number values in an array', () => {
//   const result = add([1, 2, 3]);
//   expect(result).toBe(6);
// });

it('should summarize all number values in an array', () => {
  const numbers = [1, 2];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => prevValue + curValue,
    0
  );
  expect(result).toBe(expectedResult);
});
it('should yield NaN if a least one invalid number is provided', () => {
  const inputs = ['invalid', 1];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it('should yield a correct sum if an aarray of numeric string values is provided', () => {
  const numbers = ['1', '2'];

  const result = add(numbers);

  const expectedResult = numbers.reduce(
    (prevValue, curValue) => +prevValue + +curValue,
    0
  );
  expect(result).toBe(expectedResult);
});
it('should yield 0 if an empty array is provided', () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0); //expect(result).not.toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(); // expect(resultFn).not.toThrow(); alternatif
  // try {
  //   const result = add();
  // } catch (error) {
  //   expect(error).toBeDefined();
  // }
});
it('should throw an error if provided with multiple arguments of an array', () => {
  const num1 = 1;
  const num2 = 2;
  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow();
});
