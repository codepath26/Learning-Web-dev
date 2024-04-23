const arr = [4,3,2,5,1];

for(let i =0 ; i<arr.length ; i++){
  let min = i;
  for(let j = i+1 ; j<arr.length ; j++){
    if(arr[j] < arr[min]){
      min = j;
    }
  }
  if(i !== min){
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
}
console.log(arr);