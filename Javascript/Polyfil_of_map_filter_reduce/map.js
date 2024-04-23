const arr = [1,2,3];

const newArr = arr.map((element , i , arr)=>{
  return element *2;

})
console.log(newArr);

Array.prototype.maMap = function (cb){
  const result = [];
  for(let i =0 ; i< this.length ; i++){
    result.push(cb(this[i], i , this));
  }
  return result;
}


const result = arr.myMap((element , i, arr)=>{
  return element *2;
})
console.log(result);