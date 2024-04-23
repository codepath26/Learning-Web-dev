const arr = [1, 2, 3];
const arr2 = [5, 3, 2];

arr.push.apply(arr, arr2);
console.log(arr);

// another question is this.n\
console.log(Math.max.apply(null , arr));
// 
