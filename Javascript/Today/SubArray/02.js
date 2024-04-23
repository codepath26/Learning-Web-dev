// find the max sum in subarray.

const arr = [5, 2, -4, -5, 3, -1, 2, 3, 1];
// const arr = [1,4,2,5,3];
let sum = arr[0];
for (let i = 1; i < arr.length; i++) {
  
  arr[i] = Math.max(arr[i], arr[i] + arr[i - 1]);
  console.log("i",arr[i]);
  sum = Math.max(sum, arr[i]);
}
console.log(sum);
// 