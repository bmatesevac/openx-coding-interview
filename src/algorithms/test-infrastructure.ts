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

export function arrayDeepEqual(a: any, b: any): boolean {
    if (a === b) return true;
    
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        return a.every((val, index) => arrayDeepEqual(val, b[index]));
    }
    
    return false;
}
