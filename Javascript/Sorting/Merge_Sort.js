function merge ( arr , l ,r){
  if(l<r){
    const mid = Math.floor((l+r) /2);
    merge(arr, l , mid );
    merge(arr , mid+1 , r);
    mergeSort(arr , l , mid , r);
  }
}


function mergeSort(arr , i,mid , r){
  let i = l;
  let j = mid+1;
  let k = i;
  let b = [];


  
}