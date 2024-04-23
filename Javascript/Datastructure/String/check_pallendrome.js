const word = "madam";
let l = word[0];
let r = word[word.length -1];
let flage = true;

while(l<r){
  if(word[l] === word[r]){
    l++;
    r--;
  }else{
    console.log("string is not pallendrome");
    flage = false;
    break;
  }
}
if(flage){
  console.log("string is palandrom");
}
