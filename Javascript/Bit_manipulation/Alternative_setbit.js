var hasAlternatingBits = function(n) {
  let num = n>>1;
  let d = ((num ^ n)+1)& num;
  if(d  === 0){
    return true;
  }else{
    return false;
  }
  
  
};
console.log(hasAlternatingBits(5));
