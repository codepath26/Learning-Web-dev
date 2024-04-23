const num =-100000;
let positiveNum = Math.abs(num);
const arr =[];
let str = "ABCDEF";
const b = [];

// My method used to saperate the things


while(positiveNum > 0){
  arr.push(positiveNum % 16);
  positiveNum = Math.floor(positiveNum /16);
}
console.log(arr);

if(num > 0){
  for(let i = 0 ; i<arr.length;i++){
    if(arr[i] > 9){
      let s = arr[i] -10;
      b[i] = str[s];
    }else{
      b[i] = arr[i];
    }
  }
  console.log(b.reverse().join(''));
}
if(num < 0){
  for(let i = arr.length ; i< 8 ; i++){
    arr.push(0);
  }
  let reverseArr = [];
  for(let i = 0 ; i<arr.length ; i++){
    reverseArr[i] = arr[arr.length -1 -i];
  }
  console.log(reverseArr);
  for(let i =0 ; i<reverseArr.length ; i++){
    arr[i] = 15  - reverseArr[i];
  }
  console.log('this is arr',arr);
  let cury  =1;
  for(let i = 7 ; i>=0 ; i--){
    if(arr[i] + cury < 16){
      arr[i] = arr[i] + cury;
      break;
    }else{
      console.log(i,arr[i]);
      let temp = arr[i];
      arr[i] = (arr[i] + cury) %16;
      cury = Math.floor((temp + cury)/16);
      console.log(cury);
    }
  }
  console.log(arr);
  for(let i=0 ; i<arr.length ; i++){
    if(arr[i] > 9){
       let s = arr[i] -10;
       arr[i] = str[s];
    }
  }
  console.log(arr);
  console.log(arr.join(''));
}