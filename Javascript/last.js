const str1 = "AbrAcadAbRa";

const str2 = "cAda";

function permutation(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  const myMap = new Map();
  for (let i = 0; i < str2.length; i++) {
    myMap.set(str2[i], (myMap.get(str2[i]) || 0) + 1);
  }
  console.log(myMap);
  let permuCount = 0;
  for (let i = 0; i < str1.length; i++) {
    let value = myMap.get(str1[i]);
    console.log(value, "this is value");
    if (value) {
      const newMap = new Map(myMap);
      let check = i;
      for (let j = 0; j < str2.length; j++) {
        const count = newMap.get(str1[check]);
        if (count === 1) {
          newMap.delete(str1[check]);
          check++;
        } else {
          newMap.set(str1[check], count - 1);
          check++;
        }
      }
      if (newMap.size === 0) {
        permuCount++;
      }
    }
  }
  return permuCount;
}
console.log(permutation(str1, str2));
