// Given an Array (arr) of size n. It only contains elements from range [1,n].Return an Array of all integers in the range [1,n] that do not appear in the array.You Have to solve this question without using any extra array.Hint:- Try using the last approach of rotate arrays QuestionExample 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]Explanation:- 
// All elements are present from 1 to 8 except 5 and 6.Example 2:Input: nums = [1,1]Output: [2]Explanation:- Elements that should be present is 1,2 (because n is 2 ) but 2 is missing.



const nums = [4,3,2,7,8,2,3,1];
for(let i =0 ; i< nums.length ; i++){
  let index = Math.abs(nums[i]) -1;
  if(nums[index] > 0){
    nums[index] = - nums[index];
  }
}
console.log(nums);
let remainingElement = [];
for(let i =0 ; i<nums.length;i++){
  if(nums[i] > 0){
    remainingElement.push(i+1);
  }
}
console.log(remainingElement);