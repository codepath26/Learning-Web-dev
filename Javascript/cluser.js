// const stingArray = (str, arr) => {
//   let output = "";
//   let start = 0,
//     end = arr.length - 1;

//   while (start <= end) {
//     if (start === end) {
//       output += str[start] + arr[start].toString();
//       start++;
//       continue;
//     }

//     output += str[start] + arr[start].toString();
//     start++;
//     output += str[end] + arr[end].toString();
//     end--;
//   }
//   return output;
// };

// const str = "computer";
// const arr = [6, 8, 7, 2, 7, 1, 5, 3];

// console.time("f");
// const d = stingArray(str, arr);
// console.timeEnd("f");
// const str = "computerm";
// const arr = [6, 8, 7, 2, 7, 1, 5, 3, 8];
// let output = "";
// let i = 0;
// let j = str.length - 1;
// let a = 0;
// let b = arr.length - 1;
// while (i <= j || a <= b) {
//   if (i === j) {
//     output += str[i];
//   }
//   if (a === b) {
//     output += arr[b];
//   }
//   if (i !== j && a !== b) {
//     output += str[i];
//     output += arr[a];
//     output += str[j];
//     output += arr[b];
//   }
//   a++;
//   b--;
//   i++;
//   j--;
// }
// console.log(output);

// console.log(output === d);

const rotatingString = (str1, str2) => {
  const original = str1.split(" ");
  const rotating = str2.split(" ");
  let start = 0;
  let end = original.length;
  let startingIndex = -1;
  while (start < end) {
    if (startingIndex === -1) {
      let i = 0;
      let e = rotating.length;
      while (i < e) {
        if (original[0] === rotating[i]) {
          startingIndex = i;
          break;
        } else i++;
      }
    }
    if (startingIndex === -1) {
      return false;
    }
    let rotatingIndex = (startingIndex + start) % end;
    if (original[start] !== rotating[rotatingIndex]) {
      return false;
    }
    start++;
  }
  return true;
};

const str1 = "ram is playing cricket";
const str2 = "cricket ram is playing ";
const arr = str1.split(" ");
const result = [str1];
for (let i = 0; i < arr.length - 1; i++) {
  const d = arr.shift();
  arr.push(d);
  const str2 = arr.join(" ");
  result.push(str2);
}

if (!result.includes(str2.trim())) {
  console.log("this is not arranging string", str2);
} else {
  console.log("right");
}

console.log("rotated array ==>", result);
