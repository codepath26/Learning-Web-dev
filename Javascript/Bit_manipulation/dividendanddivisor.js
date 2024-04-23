 let dividend = 10;
 let divisor = 3;
  // Handle special cases
  console.log("ca")
  if (divisor === 0) {
      throw new Error("Division by zero");
  }
  if (dividend === 0) {
      return 0;
  }
  if (divisor === 1) {
      return dividend;
  }

  // Determine the sign of the result
  const isNegative = (dividend < 0) ^ (divisor < 0);

  // Convert dividend and divisor to positive
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  let quotient = 0;
  while (dividend >= divisor) {
    console.log(dividend)
    
      let temp = divisor;
      let multiple = 1;
      while (dividend >= (temp << 1)) {
        console.log(dividend >= (temp << 1))
        console.log("time")
        console.log(temp << 1)
          temp <<= 1;
          multiple <<= 1;
      }
      dividend -= temp;
      quotient += multiple;
      console.log(dividend,divisor)
      console.log(quotient)
  }

  // Apply the sign
  quotient = isNegative ? -quotient : quotient;

  // Handle overflow
  var divide = function(dividend, divisor) {
    if(divide == 1<<31 && divisor == -1) return  2 ** 31 - 1;
  }
  
  console.log(quotient) ;
// Test the function
 // Output: 3

