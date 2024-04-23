// let arr = [1, 2, 3, 4, 5];
// let k = 3;
// let n = arr.length;
// while (k > 0) {
//   let first = arr[n - 1];
//   for (let i = n - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];

//   }
//   arr[0] = first;
//   k--;
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];

// simple bhai ama pela to first vala ne val ma strore kari pachni array per loop lagavu i=1 thie end sudhi ane val and arr[i] je chhe aene swap kari deva last ma apan ne val ma last element malse je for loop end thata arr[0] uper lagavi devu avu k time karta apanne malse arr rotated
// TC : O(n * k)

// const rotateArray = (arr, k) => {
//   const n = arr.length;
//   k = k % n;
//   while(k > 0){
//     let val = arr[0];
//     for(let i =1 ; i<arr.length; i++){
//       let temp = arr[i];
//       arr[i] = val;
//       val = temp;
//     }
//     arr[0] = val;
//     k--;
//   }
//  return arr;
// };
// console.log(rotateArray(arr ,3));




// arr [1,2,3,4,5] if the k value is 3 then effective rotation of the all element is 1 0=> 3 means new index of 1 is (oldIndex +k) % length
// now newindex of 5 is  4 + 3 % 5  ==> 2
// let arr = [1,2,3,4,5];
// let k =3;
// let d = []
// for(let i=0 ; i< arr.length ; i++){
//  let newIndex = (i + k) % arr.length
//    d[newIndex] = arr[i];
// };

// console.log(d);



// perfect optimum solution ==>

let arr = [1,2,3,4,5];
let k =3;
let rep = 0;
let counter =0;
let i =0;
let n = arr.length;
let val= arr[0];

// ama aevu chhe ke pelo element lai aene ani sahi jagya ae mokali devo ane navi jagya ae je hoy ane temp ma muki i pointer ne navi position perlavi devo pachi apanu je temp chhe ane val ne assig keri couter  + karvo pan ek infinite loop na create thay ae mate apne i and rep ne aek vadhri deva and val and pan change kari devu.
while(counter < n){
  let newPos = (i +k) % n;
  let temp = arr[newPos];
  arr[newPos] = val;
  i = newPos;

    if(rep === newPos){
      rep = (i+1)%n;
      val = arr[rep];
      i =rep;
      counter++;
      continue;
    }
    val = temp;
    counter++;
};
console.log(arr);

