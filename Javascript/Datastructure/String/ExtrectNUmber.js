const str = "abc334v44d";
const number = [];
for(let i =0 ; i<str.length; i++){
     let charCode = str.charCodeAt(i);
     let str2 = '';
    if(charCode >= 48 && charCode <=57){
       let j = i;       
       while(str.charCodeAt(j)>= 48 && str.charCodeAt(j) <= 57){
         str2 +=str[j];
              j++;
       }
       number.push(str2);
       i = j;
    }
}
console.log(number)