// // how to add the dynamic propeties into the object like

// const key = "username";
// const value = "raj rathod";

// const obj = {
//   [key]: value,
// };

// // console.log(obj.username);

// // what is the output of this

// const obj1 = {};
// const a = { name: "parth" };
// const b = { age: 30 };

// obj1[a] = 100;
// obj1[b] = 300;
// // console.log(obj1)

// // What isout put;  i can;'t understand how it's works with this
// let obj3 = { name: " parth" };
// const memeber = [obj3];
// // obj3 = null
// obj3.name = null;
// // console.log(memeber);

// //
// const value2 = { number: 10 };

// function multiply(x = { ...value2 }) {
//   console.log((x.number *= 2));
// }

// // multiply();
// // multiply();
// // multiply(value2);
// // multiply(value2);


function changeTheRefrence (person){
  person.age=20;
  person ={  // reassiging is not affect on the base refrence of the object ok.
    name : "rohan",
    age : 43,
  }
  return person;
}


const per1 ={
  name : "parth",
  age : 400,
}


const per2 = changeTheRefrence(per1);
console.log(per1);
console.log(per2);