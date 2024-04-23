// const arr =[4,3,2,5,1];

// for(let i =1 ; i<arr.length ;i++){
//     let currentElement = arr[i];
//     let j = i-1;
//     while(j >=0){
//       if(arr[j]> currentElement){
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp
//       }
//       j--;  
//     }


// }
// console.log(arr);



const arr = [4, 3, 2, 5, 1];

for (let i = 1; i < arr.length; i++) {
  let currentElement = arr[i];
  let j = i - 1;

  while (j >= 0 && arr[j] > currentElement) {
    arr[j + 1] = arr[j];
    j--;
  }
  if(currentElement !== arr[j+1]){
    arr[j + 1] = currentElement;
  }
  console.log(i,arr);
}

console.log(arr);
