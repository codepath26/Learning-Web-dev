// 3)Given an array find the maximum sum subarray. Return the maximum sum of the subarray.

// let arr = [5,2,-4,-5, 3,-1,2,3,1];
// let sum = arr[0]
// for(let i =1 ; i<arr.length ; i++){

//   arr[i] = Math.max(arr[i] , arr[i] + arr[i-1])
//   sum = Math.max(sum , arr[i]);
// }
// console.log(sum);

// 4)Input: nums = [1,2,3,4]    Output: [1,3,6,10]

// const nums = [1,2,3,4];
// let result = [];
// result[0] = nums[0];
// let sum = nums[0];
// for(let i =1 ; i<nums.length ; i++){
//    sum  = nums[i] + sum;
//    result[i] = sum;
// }
// console.log(result);

// 5)Input: accounts = [[1,2,3],[3,2,1]]   Output: 6
// const accounts = [[1,2,3],[3,2,1]] ;
// let maxBalance = 0;
// for(let i =0 ; i< accounts.length ; i++){
//   let sum = 0 ;
//   for(let j =0 ; j< accounts[i].length ; j++){
//     sum += accounts[i][j];
//   }
//   console.log(sum)
//   if(sum > maxBalance){
//     maxBalance = sum
//   }

// }
// console.log(maxBalance);

// handle both case negative and positive value

//   const accounts = [[-10,-2,-3],[-3,-2,-1]] ;
//   let resultArray = [];

//   for(let i =0 ; i< accounts.length ; i++){
//     let sum = 0 ;
//     for(let j =0 ; j< accounts[i].length ; j++){
//           sum += accounts[i][j];
//     }
//    resultArray.push(sum);
//   }
// let max = resultArray[0];
// for(let i =1 ; i<resultArray.length ; i++){
//   if(resultArray[i] > max){
//     max = resultArray[i]
//   }
// }
// console.log(max)

// Sum of All Odd Length Subarrays

// const arr = [1,4,2,5,3];
// let n = arr.length
// let sum = 0;
//   for(let i=0 ; i<n ; i++){
//     for(let j =i ; j<n ; j++){
//       console.log(arr[j]);
//       const length = j -i +1;
//       if(length % 2 !== 0){
//         for(let start = i ; start <=j ; start++){
//           sum += arr[start];
//         }
//       }
//     }
//   }
//   console.log(sum);

// optimized solution
// const arr = [1, 4, 2, 5, 3];
// let n = arr.length;
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   const leftCount = i + 1;
//   const rightCount = n - i;
//   const totalCount = leftCount * rightCount;

//   // Calculate the count of odd-length subarrays
// const oddLength = totalCount % 2 === 0 ? Math.floor(totalCount/2) : Math.floor(totalCount/2) +1;
// console.log(oddLength)
//   // Add arr[i] multiplied by the count of odd-length subarrays
//   sum += arr[i] * oddLength;
// }

// console.log(sum); // Output will be 58 (1 + 4 + 2 + 5 + 3 + 2 + 8 + 10 + 6 + 15)

// 7)
//You are given an array Containing n-1 distinct numbers from range [1, n].
// There is one element missing from the range[1,n] in the array. Find that missing Number and return it.
// Solve it without using any extra array.
// Example 1:
// Input: nums = [3,4,1]
// Output: 2

// HInt  use the sum of n netural number  sum = n * n+1 /2

// const nums = [3,4,5,2,1];
// const realLength = nums.length +1 ;
// const toatlSum = realLength * ((realLength+ 1 )/ 2)

// const totalOfNums = nums.reduce((total , a) => total + a );
// const missingNumber = toatlSum -totalOfNums;
// console.log(missingNumber)

// bubble sort
// const bubbleSort = [4,6,26,8,9,3,12,5];
// const length = bubbleSort.length
// let isSwape ;
// for(let i =0 ; i<length -1 ; i++){
//     isSwape = false;  // this is reduce time and not doing more not needed iteration.
//    for(let j = 0 ; j<length -1 - i ; j++){
//     if(bubbleSort[j] > bubbleSort[j+1]){
//       let temp = bubbleSort[j];
//       bubbleSort[j] = bubbleSort[j+1];
//       bubbleSort[j+1] = temp ;
//       isSwape = true ;
//     }
//    }
//    if(!isSwape){
//     console.log("your array is already sorted");
//     break;
//    }
// }
// console.log(bubbleSort)

//    Insertion sort algorithm. After Sorting return the array.
// Note both the array and size is already given.
// Input:-
// [4,3,2,5,1]
// Output:-
// [1,2,3,4,5]

// const insertionSort = [4,3,2,5,1]
// const n = insertionSort.length
// for(let i =1 ; i< n ; i++){
//   let key = insertionSort[i];
//   j = i-1;
//   while(j>=0){
//     if(insertionSort[j] > key){
//       insertionSort[j+1] = insertionSort[j];
//       insertionSort[j] = key;
//     }
//     j--;
//   }
// }
// console.log(insertionSort)

// Selection sort algorithm. After Sorting return the array.Note both the array and size is already given
// Input:-[4,3,2,5,1]Output:-[5,4,3,2,1]

//  const selectionSort = [ 4,3,2,5,1];
//  const n = selectionSort.length
//  for(let i=0 ; i< n ; i++){
//   let min =i;
//   for(let j =i+1 ; j<n ; j++){
//     if(selectionSort[j] < selectionSort[min]){
//       min = j;
//     }
//   }
//   if(min !== i){
//     let temp = selectionSort[i];
//     selectionSort[i] = selectionSort[min];
//     selectionSort[min] = temp;
//   }
//  }
// console.log(selectionSort);

// Given a 2D array find the maximum in it and return it
// Example:-Input:-Arr=[[5, 4, 7, 2, 6],[1,-7,8]Output:-8Explanation - 8 is the maximum value present in it. (greater than all numbers)Input: accounts = [[1,5],[7,3],[3,5]]Output: 7Explanation - 7 is the maximum value present in it. (greater than all numbers)

// const twoDArray =[[1,5],[7,3],[3,5]]
// const n = twoDArray.length
// let maxSum  = twoDArray[0][0];

// for(let i =0 ; i<n ; i++){
//   for(let j =0 ; j<twoDArray[i].length ; j++){
//     if(maxSum < twoDArray[i][j]){
//       maxSum = twoDArray[i][j];
//     }

//   }

// }
// console.log(maxSum)

// Print the patern
// 1
// 22
// 333
// 4444
// 55555

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function printPattern (maxRow , currentRow =1){
//   if(currentRow >maxRow)
//   {
//     return
//   }
//   console.log(`${currentRow}`.repeat(currentRow));
//   printPattern(maxRow , currentRow +1);
// }
// printPattern(5);

//********************************************************************************************* */

// Input: N=5

// Arr[] = {3, 1, 5, 2, 4}

// Output: 3 -1 4 -1 -1

// const arr = [3,1,5,2,4];
// // j =4,
// let flage = false;
// for(let i =0 ; i<arr.length ; i++){
//   // console.log(`i =>${i}`)
//   flage = false;
//   for(let j=arr.length-1 ; j>i ; j--){
//     // console.log(`j =>${j}`)
//     if(arr[j] < arr[i]){
//      arr[i] = j;
//      flage = true;
//      break;
//     }
//   }
//   if(!flage){
//     arr[i] = -1
// }
// }
// console.log(arr);

// const arr = [3, 1, 5, 2, 4]
// let smallerElement = new Array(arr.length).fill(-1);
// console.log(smallerElement);

// for(let i =0 ; i<arr.length ; i++){

//   for(let j = arr.length -1 ; j > i ; j--){
//     if(arr[j] < arr[i]){
//       console.log(j ,i)
//       smallerElement[i] = j;
//       break;
//     }
//   }
// }
// console.log(smallerElement)

// Bitmaipulation

// const num = 7;
// let count = 0;
// for(let i =0 ; i<32 ; i++){
//   if(((num>>i)&1) === 1){
//     count++;
//   }
// }
// console.log(count);

// const num = 3;
// let flage = false;
// let d = (num >> 1) ^ num;
// if(((d+1) & d)   === 0){
//   console.log("setbits")
//   flage =true;
// }
// if(!flage){
//   console.log("not setbits")
// }

// class Employee {
//   static count = 0;
//   constructor(name , yearOfJoining , address){
//     Employee.count++;
//     this.name = name;
//     this.yearOfJoining =yearOfJoining;
//     this.address = address;
//   }
//   print_details(){
//     console.log(`
//     Employee Name : ${this.name}
//     Year of Joining : ${this.yearOfJoining}
//     Address : ${this.address}
//     `)
//   }
//   static print_data (){
//     console.log(this)
//   }
// }

// const em1 = new Employee("Parht" , 1980 , "64C-WallsStreet")
// const em2 = new Employee("Parht" , 1980 , "68D-WallsStreet")
// const em3 = new Employee("Parht" , 1980 , "26B-WallsStreet")
// // em1.print_details()
// // em2.print_details()
// // em3.print_details()
// // em1.print_data();
// console.log(Employee.count)
// Employee.print_data();

// class Shape{
//     printShape(){
//       console.log('This is Shape');
//     }
// }

// class Rectangle extends Shape {
//  printRectangle  (){
//   console.log("This is rectangle");
// }
// }
// class Circle extends Shape {
//   printCircle(){
//     console.log("This is Shape");
//   }

// }
// class Square  extends Rectangle{
//     printSquare (){
//       console.log('Square is ractangle');
//     }
// }

// const s1 = new Square();
// s1.printSquare()
// s1.printRectangle()
// s1.printShape()
// // s1.printCircle()

// let nums = [5,7,7,8,8,10]
// let  target = 8
// function rang (nums , target){

//   let pos1 = 0 , pos2 = 0 ;
//   let l =0 ;
//   const n = nums.length
//   let h= n-1;
//   while(l<=h){
//     let mid = Math.floor((l+h)/2);
//     if(nums[mid] < target){
//       l =  mid + 1;
//     }else if(nums[mid] > target){
//       h = mid -1;
//     }else{
//       console.log(mid);
//       pos1 = mid ;
//       pos2 = mid ;
//       while(nums[pos1]  === target && pos1 >= 0){
//         pos1--;
//       }
//       while(nums[pos2]  === target  && pos2 < nums.length){
//         pos2++;
//       }
//       return ([pos1 +1, pos2 -1])
//     }
//   }
//   return ([-1,-1]);
// }
// console.log(rang(nums , target));

// var countPrimes = function(n) {
//   const arr = new Array(n).fill(true);
//   arr[0] = false ;
//   arr[1] = false ;

//   for(let i =2 ; i*i <= n ; i++){
//       if(arr[i]){
//           for(let j = i*i ; j<=n ; j += i){
//               arr[j] = false;
//           }
//       }
//   }
//   let count = 0;
//   console.log(arr);
//   for(let value of arr){
//       if(value){
//           count++;
//       }
//   }
//   return count;
// };
// console.log(countPrimes(2));







