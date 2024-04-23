function once(fun, context) {
  let ran;

  return function () {
    if (fun) {
      ran = fun.apply(context || this, arguments);
      fun = null;
    }
    return ran;
  };
}


const hello = once(()=>console.log("hello"));

hello()
hello()
hello()