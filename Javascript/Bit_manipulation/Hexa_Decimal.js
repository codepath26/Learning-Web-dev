/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {

   if (num === 0) return '0'; 
 let arr=[];
 let a=[];
 let d = "abcdef"
 let temp = Math.abs(num) ;
 
 while(temp>0)
 {
   arr.push(temp%16);
   temp = Math.floor(temp/16);
 }
 
 for( let i=arr.length ; i<8;i++){
   arr.push(0);
 }
 console.log(arr)
 for(let i=0 ; i<arr.length;i++){
   a[i] = arr[arr.length-1-i]
 }
 
 console.log(a)
 
 if(num<0){
   
   for(let i =0; i<a.length;i++){
     a[i] = 15-a[i];
   }
 
   let cury = 1;
   let ind =7
   while(ind>=0){
     if((a[ind]+cury)<16)
     {
       a[ind] = a[ind] + cury
         break;
       }
       else{
         let temp = a[ind]
         a[ind] = (a[ind]+cury)%16
         cury = Math.floor((temp + cury) /16)
         console.log("this is the curry",cury);
         ind--
         
       }
     }
   }
 
   let i =0 ;
   while(a[i]==0 && i<8)
   {
     i++;
   }
  console.log(a)
   let b=[];
   console.log(i)
   for(j=i; j<8;j++)
   {
     console.log(`j==>${j}`)
     if(a[j]<10)
     {
       console.log(a[j])
       b.push(a[j])
     }
     else
     {
       console.log(a[j])
       let s = a[j];
       s = s-10;
       console.log(s);
       console.log(d[s]);
       b.push(d[s]);
     }
 
 
 
 
 
 }
 
 return b.join(''); 
 }
 
 
 
 console.log(toHex(-100000))
 
 
 