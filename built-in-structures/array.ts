let arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr1.push(9);
console.log(arr1);
arr1.push(...[10, 11, 12, 13, 14]);
console.log(arr1);
let arr2 = arr1.map((val) => val % 2);
console.log(arr2);
let arr3 = arr1.filter((val, idx, arr) => idx % 2);
console.log(arr3);
let iterable = arr1.entries();
let result = iterable.next();
console.log(result.value);
result = iterable.next();
console.log(result.value);
let found = arr1.find((val, idx, arr) => val >= 5);
console.log(found);
let arr4: number[] = new Array(11).fill(5);
console.log(arr4);
console.log(arr1.reverse());
console.log(arr1);