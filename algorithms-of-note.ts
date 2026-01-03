function deepEqual(a: any, b: any): boolean {
    if (a === b) return true;
    
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        return a.every((val, index) => deepEqual(val, b[index]));
    }
    
    return false;
}

// Test Suite
console.log("=== Basic Cases ===");
console.log(deepEqual([[1, 2], [3, 4]], [[1, 2], [3, 4]])); // true
console.log(deepEqual([[1, 2], [3, 4]], [[1, 2], [3, 5]])); // false
console.log(deepEqual([[1]], [[1]])); // true

console.log("\n=== Empty Arrays ===");
console.log(deepEqual([], [])); // true
console.log(deepEqual([[]], [[]])); // true
console.log(deepEqual([[], []], [[], []])); // true
console.log(deepEqual([[]], [])); // false

console.log("\n=== Different Lengths ===");
console.log(deepEqual([[1, 2]], [[1, 2, 3]])); // false
console.log(deepEqual([[1], [2]], [[1]])); // false
console.log(deepEqual([[1, 2], [3]], [[1, 2]])); // false

console.log("\n=== Different Depths ===");
console.log(deepEqual([[[1]]], [[[1]]])); // true
console.log(deepEqual([[[[1]]]], [[[[1]]]])); // true
console.log(deepEqual([[[1]]], [[1]])); // false
console.log(deepEqual([[1, [2, 3]]], [[1, [2, 3]]])); // true
console.log(deepEqual([[1, [2, 3]]], [[1, [2, 4]]])); // false

console.log("\n=== Mixed Data Types ===");
console.log(deepEqual([['a', 'b'], ['c']], [['a', 'b'], ['c']])); // true
console.log(deepEqual([[1, 'a'], [true]], [[1, 'a'], [true]])); // true
console.log(deepEqual([[1, 'a'], [true]], [[1, 'a'], [false]])); // false
console.log(deepEqual([[null]], [[null]])); // true
console.log(deepEqual([[undefined]], [[undefined]])); // true

console.log("\n=== Order Matters ===");
console.log(deepEqual([[1, 2], [3, 4]], [[3, 4], [1, 2]])); // false
console.log(deepEqual([[1, 2]], [[2, 1]])); // false

console.log("\n=== Primitive vs Array ===");
console.log(deepEqual([1, 2], [1, 2])); // true (1D array)
console.log(deepEqual([1], 1)); // false (array vs number)
console.log(deepEqual([[1]], [1])); // false (2D vs 1D)

console.log("\n=== Edge Cases with Primitives ===");
console.log(deepEqual(null, null)); // true
console.log(deepEqual(undefined, undefined)); // true
console.log(deepEqual(null, undefined)); // false
console.log(deepEqual([[null]], [[undefined]])); // false

console.log("\n=== Special Numbers ===");
console.log(deepEqual([[NaN]], [[NaN]])); // false (NaN !== NaN)
console.log(deepEqual([[0]], [[-0]])); // true (0 === -0)
console.log(deepEqual([[Infinity]], [[Infinity]])); // true

console.log("\n=== Non-Array Types ===");
console.log(deepEqual({}, {})); // false (objects aren't arrays)
console.log(deepEqual([[{}]], [[{}]])); // false (objects inside arrays)
console.log(deepEqual('string', 'string')); // true (primitive equality)
console.log(deepEqual([['a']], [['a']])); // true

console.log("\n=== Complex Nested Structures ===");
console.log(deepEqual(
    [[[1, 2], [3, 4]], [[5, 6], [7, 8]]],
    [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
)); // true

console.log(deepEqual(
    [[[1, 2], [3, 4]], [[5, 6], [7, 8]]],
    [[[1, 2], [3, 4]], [[5, 6], [7, 9]]]
)); // false

console.log(deepEqual(
    [[1, [2, [3, [4, [5]]]]]],
    [[1, [2, [3, [4, [5]]]]]]
)); // true