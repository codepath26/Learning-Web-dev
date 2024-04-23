const myMemoize = (cb) => {
  const caches = {};
  return function (...args) {
    const chachedArg = JSON.stringify(args);

    if (!caches[chachedArg]) {
      caches[chachedArg] = cb(...args);
    }
    return caches[chachedArg];
  };
};

const add = (num1, num2) => {
  console.log("this is called", num1, num2);
  for (let i = 0; i < 100000000; i++) {}
  return num1 + num2;
};

const memoizeAdd = myMemoize(add);

console.time("s");
console.log(memoizeAdd(1, 2));
console.timeEnd("s");
console.time("d");
console.log(memoizeAdd(1, 2));
console.timeEnd("d");
