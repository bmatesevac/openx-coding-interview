import * as functs from './basic-algorithms';

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

   function isEqualTo<T>(set1: T[], set2: T[]): boolean {
      if (set1.length != set2.length)
         return false;
      return set1.every((val) => set2.includes(val));
   }

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
         expectedOutput: '1'
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


   });

});
