const num = 7;
let count = 0;
for(let i=0 ; i<32 ; i++){
  if(((num >> i) && 1) === 1){
    count++;
  }
}
console.log(count);