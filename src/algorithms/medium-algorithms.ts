

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
   let maxWindowSize = 0;
   let left = 0;
   let right = 0;
   let curChars = new Set<string>();

   console.log(input);

   while (right < input.length) {
      const char = input[right];
      if (curChars.has(char))
         break;
      curChars.add(char);
      maxWindowSize++
      right++;
   }

   // slide the window 
   while (right < input.length) {
      const rChar = input[right];
      if (!curChars.has(rChar)) {
         curChars.add(rChar)
         continue;
      }

      // slide left until char matches
      while (left < right) {
         let lChar = input[left++];
         curChars.delete(lChar);
         if (lChar == rChar)
            break;
         ++left;
      }
      const windowSize = right - left;
      maxWindowSize = Math.max(windowSize, maxWindowSize);
      right++;
   }
   return maxWindowSize;





}