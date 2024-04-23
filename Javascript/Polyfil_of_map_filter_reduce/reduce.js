const arr = [1, 7, 3];

const newArr = arr.reduce((acc, total) => {
  return acc + total;
});
console.log(newArr);

Array.prototype.myReduce = function (cb, initValue) {
  let result = initValue || 0;
  for (let i = 0; i < this.length; i++) {
    // result = cb(result, this[i]);
     result = result ? cb(result , this[i],i,this) : this[i];
    // console.log(result);
  }
  return result;
};
console.log(
  arr.myReduce((acc, total) => {
    return acc * total;
  }, 0)
);

