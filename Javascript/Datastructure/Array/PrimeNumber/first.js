// When you wanted to get the numbers of  prime number till the numver
let counter = 0;
let  numbers = 5;
let num = 2;
let flage = true;
const arr =[];
while(counter < numbers){
  flage = true;
  for(let i=2; i*i<=num ; i++){
    if(num%i ===0){
      flage = false;
      break;
    }
  }
  if(flage){
    counter ++;
    console.log(num);
    arr.push(num);
  }
  num++;
}
console.log(arr)

//