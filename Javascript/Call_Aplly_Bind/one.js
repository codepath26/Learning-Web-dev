
const d =function (...food){
  console.log(food)
  console.log(`this is from the d function ${this.firstName}${this.lastName} and i like ${food}`);
}
const obj1 = {
  firstName : "Parth",
  lastName : "Thakor",
  printFullName : function(){
    console.log(`${this.firstName} ${this.lastName}`);
  }
};
const obj2 = {
  firstName : "Sagar",
  lastName : "Thakor"
};
obj1.printFullName();
// wecan borrow the  function from the obj1 and used for  the obj2.
obj1.printFullName.call(obj2);
d.call(obj1,"maggi");
d.apply(obj1,["maggi","jucse"]);
const printname = d.bind(obj2,"gulhpi");
console.log(printname());



