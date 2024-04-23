function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// a();

// using the IIFE
function b() {
  for (var i = 0; i < 3; i++) {
    (function (index) {
      setTimeout(() => {
        console.log(index);
      }, index * 1000);
    })(i);
  }
}

// b();


// also use the closer
function c() {
  for (var i = 0; i < 3; i++) {
    function inner(index) {
      setTimeout(() => {
        console.log(index);
      }, index * 1000);
    }
    inner(i);
  }
}

c();
