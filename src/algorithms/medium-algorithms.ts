

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