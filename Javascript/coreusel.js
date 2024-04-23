// console.log(null > 0)
// console.log(null == 0)
// console.log(null === 0)
// console.log(null >= 0);

// console.log("2" > 1); // true;
// console.log("2".charCodeAt(0));
// console.log("1".charCodeAt(0));

// const sym1 = Symbol(1);
// const sym2 = Symbol(1);
// console.log(sym1)
// console.log(sym2)
// console.log(sym1 == sym2)

// const str = "parth";

// const str2 = str.slice(-5,5);
// console.log(str)
// console.log(str2)

// const val = 12.3465345345;
// console.log(Math.ceil(val))
// console.log(val.toFixed(2)) //aslo use  the math.foor
// const num = 10000000000000;
// console.log(num.toLocaleString('en-IN'));
// console.log(num.toLocaleString('hi-IN'));
// console.log(num.toLocaleString('gu-IN'));

// const max = 100;
// const min = 1;

// const rangOfRandomNUm = (min , max)=>{
//   const num = Math.floor(Math.random()*(max-min + 1)) + min;
//   // console.log(num)
//   return num;
// }

// console.log(rangOfRandomNUm(min , max));

// Date Object

// const date = new Date();
// const time = ((date.getTime()/1000)/3600);
// const day = date.getDate();
// const year = date.getFullYear();
// const month = date.getMonth();

// console.table([date, time, day, year, month]);

// Create Your Own Date
// const currentDate = new Date();

// const options = {
//   weekday: 'long',
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
//   timeZoneName: 'short'
// };

// const formattedDate = currentDate.toLocaleDateString('en-US', options);
// console.log(formattedDate);


// const str = "parth thakor"
// const spliteArr = str.split('')
// const arr = Array.from(str);
// console.log(arr.length);
// console.log(spliteArr.length);

const obj = {
  name : "parth",
  rollNo : 23,
}

const obj2 = {
  hobbie : "singing a song"
}

// const obj3 = Object.assign({} , obj2 , obj);
// console.log(obj3);
// console.log(obj)
// console.log(obj2);
// const obj4 = Object.assign(obj , obj2);
// console.log(obj4)
// console.log(obj)

// const d = Object.hasOwnProperty("rollNo");
// console.log(d)


// creating a Map

  const mymap = new Map();
  mymap.set(1, "this");
  const keyObje= {}
  mymap.set(keyObje, 1);
  mymap.set(function(){
    console.log("hi");
  }, {});


  // console.log(mymap);

  // forEach and for of methosd


  // mymap.forEach((value , key)=>{
  //   // console.log(value)
  // });
  // for( [ key , value] of mymap){
  //   // console.log(key , value)
  // };
  // console.log(mymap);
  // console.log(mymap.get(keyObje));

//   const arr = [1,2,3,4,5,6];

//  const newval =  arr.map((ele)=> ele *2).map((ele)=>ele *2);
// //  console.log(newval);

//  const describe = Object.getOwnPropertyDescriptor(Math , "PI");
//  console.log(describe)

// const buffer = Buffer.from("p");
// buffer.write("ram");
// console.log(buffer.toString())


// Type of the evenet loop
// 1) timer queue in which we have settimeout and setinterval and i/o queue in side some io callbacks is  ther and third one is the check queue in which we have setimmidiete callback and in last close queue we have some closing callbacks and one of the most important queue is the microtask queue inside of this we have promise and process.nexttik
