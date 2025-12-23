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

});
