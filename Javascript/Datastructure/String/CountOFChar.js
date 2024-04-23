const str = "a*b***c***d****e";
let maxCount = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "*") {
    // console.log(str[i]);
    let j = i;
    let count = 0;
    while (str[j] === "*" && j < str.length) {
      count++;
      // console.log("this",count);
      j++;
    }
    // console.log(count);
    j = i;
    if (count > maxCount) {
      maxCount = count;
    }
  }
}
console.log(maxCount);
