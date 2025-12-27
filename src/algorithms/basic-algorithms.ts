


export function sumArray(arr: number[]): number {
   return arr.reduce((sum, num) => sum + num, 0);

   // Alternative: using loop
   // let sum = 0;
   // for (const num of arr) {
   //     sum += num;
   // }
   // return sum;
}

export function reverseString(str: string): string {
   return str.split('').reverse().join('');

   // Alternative: manual approach
   // let reversed = '';
   // for (let i = str.length - 1; i >= 0; i--) {
   //     reversed += str[i];
   // }
   // return reversed;
}

export function findMax(arr: number[]): number {
   if (arr.length === 0) throw new Error("Array is empty");

   return Math.max(...arr);

   // Alternative: using reduce
   // return arr.reduce((max, num) => Math.max(max, num), arr[0]);
}

export function countVowels(str: string): number {
   const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
   let count = 0;

   for (const char of str.toLowerCase()) {
      if (vowels.has(char)) {
         count++;
      }
   }

   return count;
}

export function isPalindrome(str: string): boolean {
   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
   return cleaned === cleaned.split('').reverse().join('');

   // Alternative: two pointer approach
   // let left = 0;
   // let right = cleaned.length - 1;
   // while (left < right) {
   //     if (cleaned[left] !== cleaned[right]) return false;
   //     left++;
   //     right--;
   // }
   // return true;
}

export function removeDuplicates<T>(arr: T[]): T[] {
   return [...new Set(arr)];

   // Alternative: using filter
   // return arr.filter((item, index) => arr.indexOf(item) === index);
}

export function firstNonRepeating(str: string): string | null {
   const charCount = new Map<string, number>();

   // Count occurrences
   for (const char of str) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
   }

   // Find first with count 1
   for (const char of str) {
      if (charCount.get(char) === 1) {
         return char;
      }
   }

   return null;
}

export function twoSum(numbers: number[], target: number): number[] {
   let left = 0;
   let right = numbers.length - 1;

   while (left < right) {
      const sum = numbers[left] + numbers[right];

      if (sum === target) {
         return [left, right];
      } else if (sum < target) {
         left++;
      } else {
         right--;
      }
   }

   return []; // No solution found
}

export function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
   const useOld = false;
   if (useOld) {

      const result: number[] = [];
      let i = 0, j = 0;

      while (i < arr1.length && j < arr2.length) {
         if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
         } else {
            result.push(arr2[j]);
            j++;
         }
      }

      // Add remaining elements
      while (i < arr1.length) {
         result.push(arr1[i]);
         i++;
      }

      while (j < arr2.length) {
         result.push(arr2[j]);
         j++;
      }
      return result;
   }



   const combinedArray: number[] = [...arr1, ...arr2];
   const result = combinedArray.sort();



   return result;
}

export function countWords(str: string): number {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}