// Write the Program which store the n Prime-Number in array.

const n = 5;
let counter = 0;
const result = [];
let num = 2;
let isPrime = false;

while (counter < n) {
  isPrime = true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    result.push(num);
    counter++;
  }
  num++;
}

console.log(result);
