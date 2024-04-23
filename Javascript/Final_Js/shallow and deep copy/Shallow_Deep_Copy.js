const obj = {
  name: "parth",
  age: 90,
  address: {
    city: "palanpur",
    country: "India",
  },
};

//  Shallow copy ==> in shalow copy all the data will change the refrance is pass to the new object so it's reflact into the old object.

// const obj2 = Object.assign({} , obj);
// obj2.address.city = "deesa",
// console.log(obj.address.city)
// console.log(obj2.address.city)

// deep copies in which the main object value is not change if we change the copied object properties

const obj3 = structuredClone(obj);
// const obj3 = JSON.parse(JSON.stringify(obj));
obj3.address.city = "ahmedabad";
console.log(obj.address.city);
console.log(obj3.address.city);
