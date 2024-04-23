const arr = [1, 2, 3];

// polyfill of map.
Array.prototype.myMap = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const d = cb(this[i], i, this);
    result.push(d);
  }
  return result;
};

const newarr = arr.myMap((element, index, arr) => {
  return element * 5;
});
console.log(newarr);

//polyfill of filter.

Array.prototype.myReduce = function (cb) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    const d = cb(this[i], i, this);
    console.log(d);
    if (d) result.push(this[i]);
  }
  return result;
};

const newReduce = arr.myReduce((element, index, arr) => {
  return element > 2;
});

console.log(newReduce);

Array.prototype.myReducre = function (cb, accumulator) {
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(this[i], accumulator) : this[i];
  }
  return accumulator;
};

const d = arr.reduce((a, b) => {
  return a + b;
});
console.log(d);
