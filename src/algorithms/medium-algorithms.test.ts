import * as sut from './medium-algorithms'
import * as inf from './test-infrastructure'

describe("medium algorithms", () => {

   interface RotateArrayTest {
      input: number[];
      count: number;
      expectedOutput: number[];
   }

   const rotateArrayTests: RotateArrayTest[] = [
      {
         input: [1, 2, 3, 4, 5, 6, 7],
         count: 3,
         expectedOutput: [5, 6, 7, 1, 2, 3, 4]
      },
      {
         input: [-1, -100, 3, 99],
         count: 2,
         expectedOutput: [3, 99, -1, -100]
      }
   ]

   it.only.each(rotateArrayTests)("Can rotate $input by $count", ({ input, count, expectedOutput }) => {
      const actualOutput = sut.rotateArray(input, count);
      expect(inf.isArrayEqualTo(actualOutput, expectedOutput)).toBe(true);
   })


})