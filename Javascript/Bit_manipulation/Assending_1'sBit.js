const arr = [0,1,2,3,4,5,6,7,8];
const countArr = [];
let count ;
for(let i =0 ; i<arr.length ; i++){
  count = 0;
  for(let j=0 ; j<32 ; j++){
    if(((arr[i] >> j)& 1) === 1){
      count++;
    }
  }
  countArr.push(count);
}
// console.log(arr);
// console.log(countArr);
let swap = false;
for(let i =0 ; i<arr.length ; i++){
    swap = false;
    for(j = 0 ; j<arr.length -1 -i ; j++){
      if(countArr[j] > countArr[j+1]){
        let temp = countArr[j];
        countArr[j] = countArr[j+1];
        countArr[j+1] = temp;
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swap = true;
      }
    }
    if(!swap){
      break;
    }
}

console.log(arr)
console.log(countArr)