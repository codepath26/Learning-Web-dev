const nums = [1, 2, 3];

const newArr = nums.filter((element , i , arr) => {

  return element > 1 ;
});
console.log(newArr);


Array.prototype.myFilter = function (cb){
  const result =[];

  for(let i =0 ; i< this.length ; i++){
     const d = cb(this[i] , i , this);
     if(d){
      result.push(this[i]);
     }
  }
  return result;
}
console.log(nums.myFilter((element , i , arr)=>{return element > 1}))
