const arr = [1, -1, 3, 2, -7, -5, 11, 6 ];
let i =arr.length-1;
let j = i;

while(i > 0){
  if(arr[i]< 0){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    j--;
  }
  console.log(arr);
  i--;
}
console.log(arr);