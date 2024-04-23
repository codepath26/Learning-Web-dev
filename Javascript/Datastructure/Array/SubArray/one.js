const arr = [1,2,3,4,5];
// First method
            // for(let i =0 ; i<arr.length;i++){
            //   for(let j =0 ; j<arr.length-i;j++){
            //     let str = '';
            //     for(let k =i;k<j+1+i;k++){
            //       str += k+1;
            //     }
            //     console.log(str);
            //   }
            // };

// Second Mehthod
      for(let i =0 ; i<arr.length;i++){
        for(let j =i ; j<arr.length;j++){
             const str = arr.slice(i,j+1);
             const str2 = arr.slice(i,j+1).join('');
             console.log(str,str2)
        }
      };


// Third Method


