

export function rotateArray(arr: number[], k: number): number[] {
   const n = arr.length;
   k = k % n; // Handle k > n

   // Reverse entire array
   reverse(arr, 0, n - 1);
   // Reverse first k elements
   reverse(arr, 0, k - 1);
   // Reverse remaining elements
   reverse(arr, k, n - 1);

   return arr;
}

function reverse(arr: number[], start: number, end: number): void {
   while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
   }
}

export function findLongestSubstringLength(input: string): number {
   let maxSubstringLength = 0;
   let left = 0;
   let curChars = new Set<string>();
   let maxSubstring = "";

   for (let right=0 ; right < input.length ; ++right) {
      const rChar = input[right];
      while (curChars.has(rChar)) {
         curChars.delete(input[left++]);
      }

      curChars.add(rChar);
      const substringLength = right - left + 1;
      if (substringLength > maxSubstringLength) {
         maxSubstringLength = substringLength;
         maxSubstring = input.substring(left, right + 1)
      }
   }
   return maxSubstringLength;
}

export function groupAnagrams(strs: string[]): string[][] {
   const groups = new Map<string, string[]>();
   for(const str of strs) {
      const key = str.split('').sort().join('');
      if (!groups.has(key))
         groups.set(key, []) ;
      groups.get(key)!.push(str);
   }
   return Array.from(groups.values());
}