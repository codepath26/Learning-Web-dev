const arr = [1,4,2,5,3];
let totalsum = 0;
let oddLengthSum = 0;
let evenLengthSum=0;

// Total sum
for(let i =0 ; i<arr.length ; i++){
   for(let j=i ; j<arr.length ; j++){
    let sum = arr.slice(i,j+1).reduce((acc,total)=>acc + total , 0);
      totalsum += sum;
   }
}
console.log(totalsum);

// Oddlength sum
for(let i =0 ; i<arr.length ; i++){
   for(let j=i ; j<arr.length ; j+=2){
    let sum = arr.slice(i,j+1).reduce((acc,total)=>acc + total , 0);
      oddLengthSum += sum;
   }
}
console.log(oddLengthSum);

// eventLength
for(let i =0 ; i<arr.length ; i++){
   for(let j=i ; j<arr.length -1 ; j+=2){
    let sum = arr.slice(i,j+2).reduce((acc,total)=>acc + total , 0);
      evenLengthSum += sum;
   }
}
console.log(evenLengthSum);


// 2) Method sortcut method 
 let sum1 = 0;
 let sum2 = 0;
for(let i =0 ; i<arr.length ; i++){
   const n = arr.length;
   const leftCount = i +1;
   const rightCount = n-i;
   const totalCount = leftCount * rightCount;
   const oddLengthSum = (totalCount % 2) === 0 ? Math.floor(totalCount/2) : Math.floor(totalCount/2) +1;
   const evenLengthSum = Math.floor(totalCount/2);

   
   sum1 += arr[i] * oddLengthSum;
   sum2 += arr[i] * evenLengthSum;

}
console.log(sum1)
console.log(sum2)