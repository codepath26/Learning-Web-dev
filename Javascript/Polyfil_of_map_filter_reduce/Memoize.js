function memoFun(fn, context) {
  let storedResult = {};

  return function (...args) {
    const chachedArg = JSON.stringify(args);
    // console.log(typeof chachedArg)
    if (!storedResult[chachedArg]) {
      // console.log(storedResult[chachedArg],"first")
      // console.log('this')
      storedResult[chachedArg] = fn.call(context || this, ...args);
      // console.log(storedResult[chachedArg],"last")
    }


    return storedResult[chachedArg];
  };
}

function lazyAdd(num1, num2) {
  for (let i = 0; i < 100000000; i++) {}
  return num1 + num2;
}
function lazyMul(num1, num2) {
  for (let i = 0; i < 100000000; i++) {}
  return num1 * num2;
}


const addMemoize = memoFun(lazyAdd);
console.time('f');
console.log(addMemoize(5,4))
console.timeEnd('f');
console.time('second');
console.log(addMemoize(5,4))
console.timeEnd('second');