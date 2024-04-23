// first type
const obj = {
  name: "parth",
  getname: function () {
    console.log(this.name);
  },
  getname2: () => {
    console.log(this.name); // this is print undefined because of the arrow function in arrow function doesn't have  their own this so it's take the this if it's has parent normal function like nichhe;
  },
  getname3: function () {
    // console.log(this.name);
    name = "rohan";
    const nameArrow = () => {
      console.log(this); // at this time this is pointing to this of the normal function bro
    };
    nameArrow();
  },
};

// obj.getname();
// obj.getname2();
// obj.getname3();

// what is the output
function makeUser() {
  return {
    name: "parth",
    // ref : this // at this point this is not reffers to the this object but pointiing to the widnow objett then how to handle  this case useing  the function you can handle this

    ref: function () {
      return this.name;
    },
  };
}

// const user = makeUser();
// console.log(user.ref); // at this time this referce to the window object it's self
// console.log(user.ref()); // due to the function this is referce to the object which  is return bro so print the name.

const user = {
  name: "parth thakor",
  logMessage() {
    console.log(this.name);
  },
};

// setTimeout(user.logMessage, 1000); // at this point we just simple assign method to the settimeout but it;s take the function whiich reffers to the window object so this.name is undefined. how do you fix this.

// setTimeout(() => { user.logMessage()}, 1000); // this is the resolve with repped inside the function and called  the method
// let length = 4;
// function callback() {
//   // console.log(this)
//   console.log(this.length);
// }

// const obj5 = {
//   length: 10,
//   method(fn) {
//     fn();
//   },
// };

// obj5.method(callback);

const cal = {
  total : 0,
  add(a){
    this.total  = this.total + a;
    return this;
  },
  substract (b){
    this.total = this.total - b;
    return this;
  },
  multiple (c){
  this.total = this.total * c;
  return this
  }
}


const result = cal.add(10).multiple(20).substract(30).add(10);
// console.log(result.total)




  function f(){
    console.log(this.name)
  }
  f = f.bind({name : "parth"}).bind({name : 
  "harry"});
  f();


