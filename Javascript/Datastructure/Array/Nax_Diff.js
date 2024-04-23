// Given an integer array, return the maximum difference between any 2 adjacent elements.Example 
// 1:Input: [10, 8, 6, 4, 2]
// Output: 2Explanation:|10-8| = 2 , |8-6|=2 , |6-4|=2, |4-2|=2
// The maximum of the all is 2.
// Example 2:Input: [1, 2, 4, 7, 11]Output: 4Explanation:|1-2| = 1 , |2-4| =2 , |4-7| = 3 , |7-11| = 4
// The maximum of the all is 4.


const arr = [10, 8, 6, 8, 2];
// const arr = [1, 2, 4, 7,3];
let diff = 0;

for(let i = 0;i<arr.length-1 ;i++){
  let difference = Math.abs(arr[i] - arr[i+1]);
  if(diff < difference){
    diff = difference;
  }
}
console.log(diff);