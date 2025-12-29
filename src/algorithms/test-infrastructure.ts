export function isEqualTo<T>(set1: T[], set2: T[]): boolean {
   if (set1.length != set2.length)
      return false;
   return set1.every((val) => set2.includes(val));
}

export function isArrayEqualTo(array1: number[], array2: number[]): boolean {
   if (array1.length != array2.length)
      return false;
   return array1.every((value, index) => {
      return (array2[index] === value);
   });
}
