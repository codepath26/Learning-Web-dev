const sentences = ["please wait", "continue to fight", "continue to win"];
let max = 0;
for(let sentense of sentences){
     const length = sentense.split(' ').length;
     if(length > max){
      max  = length;
     }
}

console.log(max);