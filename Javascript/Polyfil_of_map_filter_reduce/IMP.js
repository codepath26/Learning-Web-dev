function find(index) {
  let a = [];
  for (let i = 0; i < 10000000; i++) {
    a[i] = i * i;
  }
  console.log(a[index]);
}
function findWithCloser() {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  return function (index) {
    console.log(a[index]);
  };
}

// console.time("6");
// find(6);
// console.timeEnd("6");
// console.time("12");
// find(12);
// console.timeEnd("12");
// console.log("8888888888888888888888888888888888888888888888");
console.time("60");
findWithCloser()(6);
console.timeEnd("60");
console.time("with");
findWithCloser()(12);
console.timeEnd("with");
