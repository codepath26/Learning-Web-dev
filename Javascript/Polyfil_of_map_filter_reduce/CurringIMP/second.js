function curry(func) {
  return function curriedFun(...args) {
    if (args.length >= func.length) {
      return  func(...args);
    } else {
      return function (...next) {
        return curriedFun(...args, ...next);
      };
    }
  };
}

const sum = (a, b, c, d) => {
  console.log('this is called', a+b+c+d)
  return (a + b + c + d);
};

const totalSum = curry(sum);
console.log(totalSum(4)(4)(5)(4));
