var name = "ajit";
const obj = {
  name: "parth",
  printName: function () {
    console.log(this.name);
  },
};

function printName2() {
  console.log(this.name);
}

obj.printName();
printName2();
