import * as functs from './basic-algorithms';

function isEqualTo<T>(set1: T[], set2: T[]): boolean {
   if (set1.length != set2.length)
      return false;
   return set1.every((val) => set2.includes(val));
}

function isArrayEqualTo(array1: number[], array2: number[]): boolean {
   if (array1.length != array2.length)
      return false;
   return array1.every((value, index) => {
      return (array2[index] === value);
   });
}

describe('basic algorithms', () => {
   it('should sum an array', () => {
      const arr: number[] = [1, 2, -1, 3]
      expect(functs.sumArray(arr)).toBe(5);
   });

   it('can reverse a string', () => {

      const input: string = "TypeScript"
      const output: string = "tpircSepyT"
      expect(functs.reverseString(input)).toBe(output);
   });

   it('can find max of an array', () => {

      const input: number[] = [3, 7, 2, 9, 1]
      expect(functs.findMax(input)).toBe(9);
   });

   interface CountVowelsTest {
      input: string;
      expectedCount: number;
   }

   const countVowelsTests: CountVowelsTest[] = [
      {
         input: "hello world",
         expectedCount: 3
      },
      {
         input: "TypeScript",
         expectedCount: 2
      }
   ]

   it.each(countVowelsTests)('can count vowels "$input"', ({ input, expectedCount }) => {
      expect(functs.countVowels(input)).toBe(expectedCount);
   });

   interface PalindromeTest {
      input: string;
      isPalindrome: boolean;
   }

   const palindromeTests: PalindromeTest[] = [
      {
         input: 'racecar',
         isPalindrome: true,
      },
      {
         input: 'hello',
         isPalindrome: false
      }
   ]

   it.each(palindromeTests)("Check string '$input' for palindrome", ({ input, isPalindrome }) => {
      expect(functs.isPalindrome(input)).toBe(isPalindrome)
   })



   it("Can remove duplicates", () => {
      const input: number[] = [1, 1, 2, 3, 4, 5, 5]
      const expected: number[] = [1, 2, 3, 4, 5]
      const actual = functs.removeDuplicates(input);
      expect(isEqualTo(expected, actual)).toBe(true);
   })

   /*
  
   */

   interface NonRepeatingTestCase {
      input: string;
      expectedOutput: string | null;
   }

   const nonRepeatingCharTests: NonRepeatingTestCase[] = [
      {
         input: 'leetcode',
         expectedOutput: 'l'
      },
      {
         input: 'loveleetcode',
         expectedOutput: 'v'
      },
      {
         input: 'aabb',
         expectedOutput: null
      }
   ]

   it.each(nonRepeatingCharTests)("Can find first non-repeating in $input", ({ input, expectedOutput }) => {

      expect(functs.firstNonRepeating(input)).toBe(expectedOutput);
   });

   interface TwoSumTest {
      input: number[];
      target: number;
      expectedResult: number[];
   }

   const twoSumTests: TwoSumTest[] = [
      {
         input: [2, 7, 11, 15],
         target: 9,
         expectedResult: [0, 1]
      },
      {
         input: [1, 2, 3, 4],
         target: 7,
         expectedResult: [2, 3]
      },
      {
         input: [1, 2, 3, 4],
         target: 12,
         expectedResult: []
      }
   ]

   it.each(twoSumTests)("Can find target $target", ({ input, target, expectedResult }) => {
      var actualResult = functs.twoSum(input, target);
      expect(isArrayEqualTo(actualResult, expectedResult)).toBe(true);
   });

   interface MergeSortedArrayTest {
      array1: number[];
      array2: number[];
      expectedResult: number[];
   }

   const mergeSortedArrayTests: MergeSortedArrayTest[] = [
      {
         array1: [1, 3, 5],
         array2: [2, 4, 6],
         expectedResult: [1, 2, 3, 4, 5, 6]
      },
      {
         array1: [1, 2, 3],
         array2: [4, 5, 6],
         expectedResult: [1, 2, 3, 4, 5, 6]
      }, 
      {
         array1: [1, 2, 3, 8],
         array2: [6, 7, 9],
         expectedResult: [1, 2, 3, 6, 7, 8, 9]
      }
   ]

   it.each(mergeSortedArrayTests)("Can correctly sort arrays",({ array1, array2, expectedResult}) =>
   {
      const actualResult = functs.mergeSortedArrays(array1, array2);
      expect(isArrayEqualTo(actualResult, expectedResult)).toBe(true)

   })

   interface WordCountTest {
      words: string;
      expectedCount: number;
   }

   const wordCountTests : WordCountTest[] = [
      {
         words: "Hello world from TypeScript",
         expectedCount: 4

      },
      { 
         words:  "  Multiple   spaces  ",
         expectedCount: 2
      }
   ]


   

});
