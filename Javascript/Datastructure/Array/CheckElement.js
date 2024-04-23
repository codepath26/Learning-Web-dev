// You have given two arrays arr1 and arr2 .you can arrange the array elements as your wish .You have to check if element present at i th index of arr1 is less than equal to element present at index of arr2 .if such solution exits return true else return false .
// Example 1:Input:
// arr1[] = {7, 5, 3, 2},
// arr2[] = {5, 4, 8, 7}

let arr1 = [7,5,3,2];
let arr2 = [5,4,8,7];

arr1 = arr1.sort((a,b)=>a-b);
arr2 = arr2.sort((a,b)=>a-b);

console.log(arr1)
console.log(arr2)

 